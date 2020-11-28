from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.
class User(AbstractUser):

    # Padrao de nomenclatura das variaveis: nome_da_chave_nome_da_cifra_nome_do_modo
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
            'erro': False,
            'nome_usuario': self.username,
            'e-mail': self.email,
            'chave_cesar_apenas_letras' : self.chave_cesar_apenas_letras,
            'chave_cesar_varios_caracteres' : self.chave_cesar_varios_caracteres,
            'msg_comum_subst_simples_apenas_letras' : self.msg_comum_subst_simples_apenas_letras,
            'msg_encript_subst_simples_apenas_letras' : self.msg_encript_subst_simples_apenas_letras,
            'msg_comum_subst_simples_varios_caracteres' : self.msg_comum_subst_simples_varios_caracteres,
            'msg_encript_subst_simples_varios_caracteres' : self.msg_encript_subst_simples_varios_caracteres,
            'chave_vigenere_apenas_letras' : self.chave_vigenere_apenas_letras,
            'chave_vigenere_varios_caracteres' : self.chave_vigenere_varios_caracteres
        }