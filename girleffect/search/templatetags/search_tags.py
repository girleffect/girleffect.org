from django import template

register = template.Library()


@register.simple_tag(name='preview')
def show_preview_text(result):
    body_text_blocks = ['body_text', 'large_text']

    if hasattr(result, 'search_description') and result.search_description:
        return result.search_description
    if hasattr(result, 'listing_summary') and result.listing_summary:
        return result.listing_summary
    elif hasattr(result, 'introduction'):
        return result.introduction
    elif hasattr(result, 'body'):
        for block in result.body:
            if block.block_type in body_text_blocks:
                return block.value
