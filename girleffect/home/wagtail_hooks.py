from django.contrib.auth.models import Permission

from wagtail.wagtailadmin.rich_text import HalloPlugin
from wagtail.wagtailcore import hooks
from wagtail.wagtailcore.whitelist import attribute_rule


@hooks.register('register_permissions')
def register_collection_permissions():
    return Permission.objects.filter(
        content_type__app_label='wagtailcore',
        codename__in=['add_collection', 'change_collection', 'delete_collection']
    )


@hooks.register('construct_whitelister_element_rules')
def whitelister_element_rules():
    return {
        'p': attribute_rule({'style': True, 'align': True}),
        'h2': attribute_rule({'style': True, 'align': True}),
        'h3': attribute_rule({'style': True, 'align': True}),
        'h4': attribute_rule({'style': True, 'align': True}),
        'h5': attribute_rule({'style': True, 'align': True}),
        'h6': attribute_rule({'style': True, 'align': True}),
    }


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
