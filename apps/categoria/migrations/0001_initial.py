# Generated by Django 3.1.7 on 2022-04-30 23:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('empresa', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Categoria',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, verbose_name='Categoría')),
                ('description', models.TextField(verbose_name='Descripción')),
                ('image', models.ImageField(upload_to='categoria', verbose_name='Imagen')),
                ('status', models.BooleanField(default=True, help_text='Alta/Baja', verbose_name='estado')),
                ('business', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='empresa.business', verbose_name='Empresa')),
            ],
            options={
                'verbose_name': 'Categoria',
                'verbose_name_plural': 'Categorías',
                'ordering': ('id',),
            },
        ),
    ]
