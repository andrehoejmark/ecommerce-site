# Generated by Django 2.2.27 on 2022-02-13 19:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0002_product_images'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='images',
            new_name='image',
        ),
        migrations.RenameField(
            model_name='product',
            old_name='name',
            new_name='title',
        ),
        migrations.AddField(
            model_name='product',
            name='desc',
            field=models.TextField(blank=True, default=None, null=True),
        ),
    ]
