# Generated by Django 4.0.4 on 2022-06-22 01:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0003_project_featured_image'),
    ]

    operations = [
        migrations.RenameField(
            model_name='project',
            old_name='demon_link',
            new_name='demo_link',
        ),
    ]
