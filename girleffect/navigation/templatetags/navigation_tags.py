from django import template

from girleffect.esi import register_inclusion_tag
from girleffect.navigation.models import NavigationSettings

register = template.Library()

esi_inclusion_tag = register_inclusion_tag(register)


# Primary nav snippets
@esi_inclusion_tag('navigation/primarynav.html')
def primarynav(context):
    navigation_settings = NavigationSettings.for_site(context['request'].site)
    context = {
        'primary_nav_blocks': navigation_settings.primary_links,
        'request': context['request'],
    }

    return context


# Secondary nav snippets
@esi_inclusion_tag('navigation/secondarynav.html')
def secondarynav(context):
    navigation_settings = NavigationSettings.for_site(context['request'].site)
    return {
        'secondary_nav_blocks': navigation_settings.secondary_links,
        'request': context['request'],
    }


# Footer nav snippets
@esi_inclusion_tag('navigation/footernav.html')
def footernav(context):
    navigation_settings = NavigationSettings.for_site(context['request'].site)
    return {
        'footer_nav_blocks': navigation_settings.footer_links,
        'request': context['request'],
    }
