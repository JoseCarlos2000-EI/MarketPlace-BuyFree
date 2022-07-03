# Generated by Django 3.1.7 on 2022-07-03 06:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('empresa', '0001_initial'),
        ('categoria', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Anuncio',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('evento', models.CharField(blank=True, max_length=50, null=True)),
                ('image1', models.ImageField(upload_to='anuncio', verbose_name='Imagen Principal')),
                ('image2', models.ImageField(upload_to='anuncio', verbose_name='Imagen Secundaria')),
                ('business', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='empresa.business', verbose_name='Empresa')),
            ],
        ),
    ]