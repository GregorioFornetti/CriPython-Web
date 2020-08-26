from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('login', views.login_view, name='login'),
    path('register', views.register_view, name='register'),
    path('logout', views.logout_view, name='logout'),

    # Rotas para retorno do conteúdo da pagina...
    path('home', views.homepage_view, name='home'),
    path('unicode/<int:limite>', views.return_JSON_unicode_padrao, name='unicode')
]