from django.contrib.auth.models import Permission

from wagtail.wagtailcore import hooks


@hooks.register('register_permissions')
def register_collection_permissions():
    return Permission.objects.filter(
        content_type__app_label='wagtailcore',
        codename__in=['add_collection', 'change_collection', 'delete_collection']
    )
