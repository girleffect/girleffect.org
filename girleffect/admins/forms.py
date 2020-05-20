from django import forms


class PermissionGroupCheckboxSelect(forms.CheckboxSelectMultiple):
    template_name = 'admin/permission_group_checkbox_select.html'

    def create_option(
            self, name, value, label, selected, index,
            subindex=None, attrs=None):

        opt = super().create_option(
            name, value, label, selected, index,
            subindex=subindex, attrs=attrs)
        opt.update({
            'permissions': self.choices.queryset.get(name=label)
            .permissions.all().values_list('name', flat=True)
        })
        return opt
