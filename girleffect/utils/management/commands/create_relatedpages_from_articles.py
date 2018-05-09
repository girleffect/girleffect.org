from django.core.management.base import BaseCommand


class Command(BaseCommand):
    help = """
    The command creates new RelatedPages objects 
    ( with the '--create' argument ) from ArticlePage related pages
    """

    def add_arguments(self, parser):
        parser.add_argument(
            '--create',
            action='store_true',
            dest='create',
            help='Creates the relatedpages in all the models'
        )

    def handle(self, *args, **options):
        # Adding the imports to the top of the file results in an error, leave it here
        from girleffect.articles.models import ArticlePage, ArticlePageRelatedPage
        from girleffect.countries.models import CountryPage
        from girleffect.home.models import HomePage
        from girleffect.standardpage.models import StandardPage
        from girleffect.solutions.models import SolutionPage
        from girleffect.utils.models import RelatedPages

        old_related_pages = 0
        created_related_pages = 0
        failed_related_pages = 0
        empty_related_pages = 0

        for article in ArticlePage.objects.all():
            related_pages = ArticlePageRelatedPage.objects.filter(source_page=article.id)
            for page in related_pages:
                old_related_pages += 1
                try:
                    obj = None
                    klass = page.page.content_type.model_class()
                    if klass is ArticlePage:
                        try:
                            article_page = ArticlePage.objects.get(id=page.page_id)
                            if options['create']:
                                obj = RelatedPages.objects.create(
                                    page_id=article.id, source_page_id=article_page.id
                                )
                        except Exception as e:
                            print('Failed to create {}'.format(e))
                    elif klass is SolutionPage:
                        try:
                            solution_page = SolutionPage.objects.get(id=page.page_id)
                            if options['create']:
                                obj = RelatedPages.objects.create(
                                    page_id=article.id, source_page_id=solution_page.id
                                )
                        except Exception as e:
                            print('Failed to create {}'.format(e))
                    elif klass is StandardPage:
                        try:
                            standard_page = StandardPage.objects.get(id=page.page_id)
                            if options['create']:
                                obj = RelatedPages.objects.create(
                                    page_id=article.id, source_page_id=standard_page.id
                                )
                        except Exception as e:
                            print('Failed to create {}'.format(e))
                    elif klass is CountryPage:
                        try:
                            country_page = CountryPage.objects.get(id=page.page_id)
                            if options['create']:
                                obj = RelatedPages.objects.create(
                                    page_id=article.id, source_page_id=country_page.id
                                )
                        except Exception as e:
                            print('Failed to create {}'.format(e))
                    elif klass is HomePage:
                        try:
                            home_page = HomePage.objects.get(id=page.page_id)
                            if options['create']:
                                obj = RelatedPages.objects.create(
                                    page_id=article.id, source_page_id=home_page.id
                                )
                        except Exception as e:
                            print('Failed to create {}'.format(e))
                    else:
                        print('+++++ERROR: Unable to determine class+++++')
                    created_related_pages += 1 if obj else 0
                    failed_related_pages += 1 if not obj else 0
                except AttributeError:
                    empty_related_pages += 1

        print("=============================================")
        print("Number of old ArticlePage related pages {}".format(old_related_pages))
        print("Number of old ArticlePage empty related pages {}".format(empty_related_pages))
        print("Number of new related pages {}".format(created_related_pages))
        print("Number of new failed related pages {}".format(failed_related_pages))
        print("=============================================")
