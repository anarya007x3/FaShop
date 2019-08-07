from django.db import models

# Create your models here.


class Product(models.Model):
    title = models.CharField('title', max_length=125)
    description = models.CharField(
        'description',
        max_length=250,
        blank=True,
    )
    is_active = models.BooleanField('active', default=True)
    image = models.ImageField(
        upload_to='products/product_{self.id}/',
        blank=True,
        null=True,
    )
    price = models.DecimalField(
        'price',
        max_digits=15,
        decimal_places=2,
        default=0.00,
    )

    class Meta:
        verbose_name = 'product'
        verbose_name_plural = 'products'
