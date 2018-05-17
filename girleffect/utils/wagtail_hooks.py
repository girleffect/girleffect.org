from wagtail.wagtailcore import hooks


@hooks.register('construct_page_chooser_queryset')
def show_pages_in_current_site_only(pages, request):
    # Show pages exist in the requesting site
    pages = pages.in_site(request.site)

    return pages
