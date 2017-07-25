#!/usr/bin/env python
import os

import django
from django.contrib.auth import get_user_model


os.environ.setdefault("DJANGO_SETTINGS_MODULE", "girleffect.settings")
django.setup()

User = get_user_model()
username = 'admin'
password = 'admin'
email = 'admin@localhost'

if not User.objects.filter(username=username, email=email).exists():
    User.objects.create_superuser(username=username, email=email, password=password)
