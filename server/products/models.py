from django.db import models
from django.utils.translation import ugettext_lazy as _

# Create your models here.


class Product(models.Model):
    title = models.CharField(_('title'), max_length=125)
    description = models.CharField(
        _('description'),
        max_length=250,
        blank=True,
    )
    is_active = models.BooleanField(_('active'), default=True)
    image = models.ImageField(
        upload_to='products/product_{self.id}/',
        blank=True,
        null=True,
    )
    price = models.DecimalField(
        _('price'),
        max_digits=15,
        decimal_places=2,
        default=0.00,
    )

    class Meta:
        verbose_name = _('product')
        verbose_name_plural = _('products')
