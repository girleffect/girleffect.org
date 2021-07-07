from wagtail.wagtailcore import hooks
from wagtail.wagtailcore.models import UserPagePermissionsProxy


@hooks.register('construct_page_chooser_queryset')
def show_user_editable_pages_only(pages, request):
    # Return pages user has permission to edit. Queryset will include pages
    # that are present in both pages and user_editable_pages querysets.
    user_perms = UserPagePermissionsProxy(request.user)
    user_editable_pages = user_perms.editable_pages().specific()

    return pages & user_editable_pages
