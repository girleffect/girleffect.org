from django.core.management.base import BaseCommand
from django.core.exceptions import MultipleObjectsReturned

from wagtail.wagtailcore.models import Collection
from wagtail.wagtailimages import get_image_model
from wagtail.wagtaildocs.models import get_document_model

from wagtailmedia.models import get_media_model

WagtailImage = get_image_model()
WagtailDocument = get_document_model()
WagtailMedia = get_media_model()


class Command(BaseCommand):
    help = (
        'Create collection girleffect.org and change collection '
        'of Images/Documents/Media to it. Add tag with name of old '
        'collection to image/document/media objects.'
    )

    def handle(self, *args, **options):
        root_collection = Collection.get_first_root_node()

        try:
            default_site_collection = Collection.objects.get(
                name='girleffect.org'
            )
        except Collection.DoesNotExist:
            default_site_collection = root_collection.add_child(
                name='girleffect.org'
            )
        except MultipleObjectsReturned:
            default_site_collection = Collection.objects.filter(
                name='girleffect.org'
            ).first()

        # Wagtail Images
        images = WagtailImage.objects.select_related('collection')

        for image in images:
            if image.collection != default_site_collection:
                old_collection = image.collection
                image.collection = default_site_collection

                # Add tag if old collection is not root
                if old_collection != root_collection:
                    image.tags.add(old_collection.name)

                image.save(update_fields=['collection'])

        print('Images collection changed to girleffect.org and tags added '
              'with name of Old collection')

        # Wagtail Documents
        documents = WagtailDocument.objects.select_related('collection')

        for doc in documents:
            if doc.collection != default_site_collection:
                old_collection = doc.collection
                doc.collection = default_site_collection

                # # Add tag if old collection is not root
                if old_collection != root_collection:
                    doc.tags.add(old_collection.name)

                doc.save(update_fields=['collection'])

        print('Documents collection changed to girleffect.org and tags added '
              'with name of Old collection')

        # Wagtail Media
        media = WagtailMedia.objects.select_related('collection')

        for media_obj in media:
            if media_obj.collection != default_site_collection:
                old_collection = media_obj.collection
                media_obj.collection = default_site_collection

                # Add tag if old collection is not root
                if old_collection != root_collection:
                    media_obj.tags.add(old_collection.name)

                media_obj.save(update_fields=['collection'])

        print('Media collection changed to girleffect.org and tags added '
              'with name of Old collection')
