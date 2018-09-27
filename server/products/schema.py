import graphene
from graphene_django.types import DjangoObjectType
from .models import Product


class ProductType(DjangoObjectType):
    class Meta:
        model = Product


class Query(object):
    all_products = graphene.List(ProductType)
    product = graphene.Field(ProductType, id=graphene.Int())

    def resolve_all_products(self, info, **kwargs):
        return Product.objects.all()

    def resolve_category(self, info, **kwargs):
        id = kwargs.get('id')

        if id is not None:
            return Product.objects.get(pk=id)

        return None
