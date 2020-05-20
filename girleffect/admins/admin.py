from wagtail.contrib.modeladmin.options import (
    ModelAdmin as WagtailModelAdmin, modeladmin_register)

from wagtail.contrib.modeladmin.views import CreateView

from girleffect.admins.models import Invite


class InviteAdmin(WagtailModelAdmin):
    model = Invite
    menu_order = 600
    menu_icon = 'mail'
    menu_label = 'Invites'
    add_to_settings_menu = True
    search_fields = ['email']
    list_filter = ['is_accepted', 'created_at']
    list_display = [
        'email', 'created_at', 'modified_at', 'is_accepted', 'user',
    ]

    class InviteCreateView(CreateView):
        def form_valid(self, form):
            if not form.instance.user:
                form.instance.user = self.request.user
            if not form.instance.site and hasattr(self.request, 'site'):
                form.instance.site = self.request.site
            return super().form_valid(form)

    create_view_class = InviteCreateView


modeladmin_register(InviteAdmin)

