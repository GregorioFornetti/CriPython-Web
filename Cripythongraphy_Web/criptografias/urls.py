from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('login', views.login_view, name='login'),
    path('register', views.register_view, name='register'),
    path('logout', views.logout_view, name='logout'),
    path('update_user_infos', views.update_user_infos, name='update_info'),
    path('get_user_infos', views.get_user_infos, name='get_info'),

    # Rotas para retorno do conteúdo da pagina...
    path('home', views.homepage_view, name='home')
]