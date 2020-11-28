from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.
class User(AbstractUser):
    chave_cesar_apenas_letras = models.IntegerField(default=0)
    chave_cesar_varios_caracteres = models.IntegerField(default=0)

    msg_comum_subst_simples_apenas_letras = models.CharField(max_length=30, blank=True)
    msg_encript_subst_simples_apenas_letras = models.CharField(max_length=30, blank=True)
    msg_comum_subst_simples_varios_caracteres = models.CharField(max_length=700, blank=True)
    msg_encript_subst_simples_varios_caracteres = models.CharField(max_length=700, blank=True)

    chave_vigenere_apenas_letras = models.CharField(max_length=1000, blank=True)
    chave_vigenere_varios_caracteres = models.CharField(max_length=1000, blank=True)

    def serialize(self):
        return {
            
        }