from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.
def User(AbstractUser):
    chave_cesar_apenas_letras = models.IntegerField(max_length=10)
    chave_cesar_varios_caracteres = models.IntegerField(max_length=10)

    msg_comum_subst_simples_apenas_letras = models.TextField(max_length=30)
    msg_encript_subst_simples_apenas_letras = models.TextField(max_length=30)
    msg_comum_subst_simples_varios_caracteres = models.TextField(max_length=700)
    msg_encript_subst_simples_varios_caracteres = models.TextField(max_length=700)

    chave_vigenere_apenas_letras = models.TextField(max_length=1000)
    chave_vigenere_varios_caracteres = models.TextField(max_length=1000)