from django.db import models
from django.contrib.auth.models import User, Group, Permission

from wagtail.wagtailadmin.edit_handlers import FieldPanel

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
