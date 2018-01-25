from django.contrib.auth.models import Permission

from wagtail.wagtailadmin.rich_text import HalloPlugin
from wagtail.wagtailcore import hooks


@hooks.register('register_permissions')
def register_collection_permissions():
    return Permission.objects.filter(
        content_type__app_label='wagtailcore',
        codename__in=['add_collection', 'change_collection', 'delete_collection']
    )


@hooks.register('register_rich_text_features')
def register_justify_feature(features):
    features.register_editor_plugin(
        'hallo', 'justify',
        HalloPlugin(
            name='hallojustify',
            js=['/static/plugins/justify.js'],
        )
    )
    features.default_features.append('justify')
