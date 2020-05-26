
from django.core import mail
from django.urls import reverse
from django.conf import settings
from django.contrib.sites.models import Site

from django.contrib.auth import get_user_model
from django.test.utils import override_settings
from django.test import TestCase, RequestFactory
from django.contrib.auth.models import Group, Permission

from allauth.socialaccount.models import SocialLogin, SocialAccount

from girleffect.admins.models import Invite
from girleffect.admins.adapter import StaffUserSocialAdapter, StaffUserAdapter


class TestAllAuth(TestCase):
    def setUp(self):
        self.user = get_user_model().objects.create_superuser(
            username='superuser', email='superuser@email.com', password='pass')
        self.site = Site.objects.create(name='test.com', domain='test.com')

    @override_settings(ENABLE_ALL_AUTH=True)
    def test_admin_login_view(self):
        res = self.client.get(reverse('wagtailadmin_login'))
        self.assertEqual(res.status_code, 200)

    @override_settings(ENABLE_ALL_AUTH=True)
    def test_admin_views_authed_user(self):
        self.client.force_login(self.user)

        res = self.client.get(reverse('wagtailadmin_login'))
        self.assertEqual(res.status_code, 302)
        self.assertEqual(settings.ENABLE_ALL_AUTH, True)
        self.assertEqual(res.url, '/admin/')

        res = self.client.get(res.url)
        self.assertEqual(res.status_code, 200)

    @override_settings(ENABLE_ALL_AUTH=True)
    def test_invite_create_view(self):
        req = RequestFactory()
        req.site = self.site
        req.user = self.user

        self.client.force_login(self.user)
        url = '/admin/admins/invite/create/'
        data = {
            'email': 'testinvite@test.com'
        }
        res = self.client.post(url, data=data, request=req)

        subject = '{}: Admin site invitation'.format(self.site)
        self.assertEqual(res.status_code, 302)

        self.assertEqual(len(mail.outbox), 1)
        self.assertEqual(mail.outbox[0].subject, subject)
        self.assertEqual(mail.outbox[0].to, [data['email']])
        self.assertEqual(mail.outbox[0].from_email, 'no-reply@gehosting.org')

        self.assertTrue(
            Invite.objects.filter(user=self.user).exists())

    @override_settings(ENABLE_ALL_AUTH=True)
    def test_invite_edit_view(self):
        data = {
            'email': 'testinvite@test.com'
        }
        req = RequestFactory()
        req.site = self.site
        req.user = self.user

        invite = Invite.objects.create(email=data['email'], user=self.user)
        self.client.force_login(self.user)

        url = '/admin/admins/invite/edit/{}/'.format(invite.pk)
        res = self.client.post(url, request=req)
        self.assertEqual(res.status_code, 200)
        self.assertContains(res, data['email'])
        res = self.client.post(url, data=data, request=req)

        self.assertEqual(res.status_code, 302)
        # Note: email sent on creation of invite object by signal
        # testing that a duplicate email was not sent on update
        self.assertEqual(len(mail.outbox), 1)

    def test_staff_social_adaptor(self):
        """
        Test a front-end user getting an invite to admin site
        """
        request = RequestFactory()
        request.site = self.site

        adaptor = StaffUserSocialAdapter(request=request)
        user = get_user_model().objects.create_user(
            username='testuser',
            email='testuser@email.com',
            password='pass'
        )
        sociallogin = SocialLogin(user=user)
        group = Group.objects.filter().first()
        perm = Permission.objects.filter().first()

        self.assertFalse(adaptor.is_open_for_signup(request, sociallogin))

        invite = Invite.objects.create(email=user.email, user=self.user)
        invite.groups.add(group)
        invite.permissions.add(perm)

        self.assertFalse(user.groups.all().exists())
        self.assertFalse(user.user_permissions.all().exists())

        adaptor.add_perms(user)
        invite.refresh_from_db()
        self.assertTrue(invite.is_accepted)
        self.assertTrue(user.groups.all().exists())
        self.assertTrue(user.user_permissions.all().exists())

        user.delete()
        invite.delete()

    def test_staff_social_adaptor_new_user(self):
        """
        Test a new user getting an invite to admin site
        """
        request = RequestFactory()
        request.site = self.site

        adaptor = StaffUserSocialAdapter(request=request)
        user = get_user_model()(
            username='testuser',
            email='testuser@email.com',
            password='pass'
        )
        sociallogin = SocialLogin(user=user)
        group = Group.objects.filter().first()
        perm = Permission.objects.filter().first()

        self.assertFalse(user.pk)
        self.assertFalse(adaptor.is_open_for_signup(request, sociallogin))

        invite = Invite.objects.create(email=user.email, user=self.user)
        invite.groups.add(group)
        invite.permissions.add(perm)

        adaptor.add_perms(user)
        invite.refresh_from_db()
        self.assertTrue(invite.is_accepted)
        self.assertTrue(user.groups.all().exists())
        self.assertTrue(user.user_permissions.all().exists())

        user.delete()
        invite.delete()

    def test_staff_social_adaptor_staff(self):
        """
        Test a regular staff login
        """
        request = RequestFactory()
        request.site = self.site
        adaptor = StaffUserSocialAdapter(request=request)
        user = get_user_model().objects.create_user(
            username='testuser',
            email='testuser@email.com',
            password='pass',
            is_staff=True,
        )
        sociallogin = SocialLogin(user=user)
        group = Group.objects.filter().first()
        perm = Permission.objects.filter().first()

        user.groups.add(group)
        user.user_permissions.add(perm)
        self.assertFalse(adaptor.is_open_for_signup(request, sociallogin))

        adaptor.add_perms(user)
        self.assertTrue(user.groups.all().exists())
        self.assertTrue(user.user_permissions.all().exists())

        user.delete()

    def test_staff_social_adaptor_superuser(self):
        """
        Test a superuser login
        """
        request = RequestFactory()
        adaptor = StaffUserSocialAdapter(request=request)
        user = get_user_model().objects.create_user(
            username='testuser',
            email='testuser@email.com',
            is_superuser=True,
            password='pass'
        )
        request.site = self.site
        sociallogin = SocialLogin(user=user)
        self.assertFalse(adaptor.is_open_for_signup(request, sociallogin))
        self.assertFalse(user.groups.all().exists())
        self.assertFalse(user.user_permissions.all().exists())

        adaptor.add_perms(user)
        self.assertFalse(user.groups.all().exists())
        self.assertFalse(user.user_permissions.all().exists())

        user.delete()

    def test_staff_user_adapter_new_user(self):
        adaptor = StaffUserAdapter()
        user = get_user_model()(
            username='testuser',
            email='testuser@email.com',
            password='pass'
        )
        request = RequestFactory().post(
            data={
                'username': user.username,
                'password': user.password
            }, path=reverse('wagtailadmin_login'))
        request.site = self.site
        self.assertFalse(adaptor.is_open_for_signup(request, None))

    def test_staff_user_adapter_front_end_user(self):
        adaptor = StaffUserAdapter()
        user = get_user_model().objects.create(
            username='testuser',
            email='testuser@email.com',
            password='pass'
        )
        request = RequestFactory().post(
            data={
                'username': user.username,
                'password': user.password
            }, path=reverse('wagtailadmin_login'))
        request.site = self.site
        self.assertFalse(adaptor.is_open_for_signup(request, None))

    def test_staff_user_adapter_staff_user(self):
        adaptor = StaffUserAdapter()
        user = get_user_model().objects.create(
            username='testuser',
            email='testuser@email.com',
            is_staff=True,
            password='pass'
        )
        request = RequestFactory().post(
            data={
                'username': user.username,
                'password': user.password
            }, path=reverse('wagtailadmin_login'))
        request.site = self.site
        self.assertFalse(adaptor.is_open_for_signup(request, None))

    def test_staff_user_adapter_staff_user_perms(self):
        adaptor = StaffUserAdapter()
        group = Group.objects.filter().first()
        perm = Permission.objects.filter().first()
        user = get_user_model().objects.create(
            username='testuser',
            email='testuser@email.com',
            is_staff=True,
            password='pass'
        )
        user.groups.add(group)
        user.user_permissions.add(perm)
        request = RequestFactory().post(
            data={
                'username': user.username,
                'password': user.password
            }, path=reverse('wagtailadmin_login'))
        request.site = self.site
        self.assertFalse(adaptor.is_open_for_signup(request, None))

    def test_user_delete(self):
        user = get_user_model().objects.create(
            username='testuser',
            email='testuser@email.com',
            is_staff=True,
            password='pass'
        )
        SocialAccount.objects.create(
            user=user, provider='google', uid='1')
        user.delete()
        self.assertFalse(
            SocialAccount.objects.filter(user=user)
        )

    @override_settings(ENABLE_ALL_AUTH=False)
    def test_login_all_auth_disabled(self):
        res = self.client.get(reverse('wagtailadmin_login'))
        self.assertEqual(res.status_code, 200)
        self.assertNotContains(res, '<span class="fa fa-google"></span>Google')
