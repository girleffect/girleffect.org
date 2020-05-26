from django.db import models
from django.urls import reverse
from django.dispatch import receiver
from django.core.mail import send_mail
from django.db.models.signals import post_save
from django.utils.text import ugettext_lazy as _
from django.contrib.auth.models import User, Group, Permission

from django.contrib.sites.models import Site
from wagtail.wagtailadmin.edit_handlers import FieldPanel

from settings import base as settings

from .forms import PermissionGroupCheckboxSelect


class Invite(models.Model):
    email = models.EmailField(unique=True)
    is_accepted = models.BooleanField(default=False)
    groups = models.ManyToManyField(Group, blank=True)
    permissions = models.ManyToManyField(Permission, blank=True)

    modified_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, null=True, on_delete=models.PROTECT)

    def __str__(self):
        return 'Invite: {}'.format(self.email)

    panels = [
        FieldPanel('email'),
        FieldPanel('groups', widget=PermissionGroupCheckboxSelect),
        # FieldPanel('permissions', widget=CheckboxSelectMultiple),
    ]


@receiver(post_save, sender=Invite)
def send_admin_invite_email(sender, **kwargs):
    invite = kwargs.get('instance')
    created = kwargs.get('created')
    if created and settings.ENABLE_ALL_AUTH:
        user = invite.user
        site = Site.objects.get(pk=settings.SITE_ID)
        subject = _('{}: Admin site invitation'.format(site))
        url = '{}{}'.format(site.domain, reverse('wagtailadmin_login'))
        message = _(
            'Hello, \n\n'
            'You have been invited to {0} Admin site by {1}. \n'
            'Use the link below to log in with Google sign in. \n'
            '{2}'.format(site, user, url)
        )
        send_mail(
            subject, message, None, [invite.email]
        )
