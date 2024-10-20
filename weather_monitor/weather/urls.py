from django.urls import path
from . import views

urlpatterns = [
    path('', views.weather_summary, name='weather_summary'),
    path('api/fetch_weather/', views.fetch_weather_api, name='fetch_weather_api'),
]
 