from django.conf.urls import url
from . import views

urlpatterns = [
	url(r'^$', views.home, name='home'),
	url(r'^canvas/?$', views.canvas, name='canvas'),
	url(r'^contact/?$', views.contact, name='contact'),
	url(r'^examples/?$', views.examples, name='examples'),
	url(r'^table/?$', views.table, name='table'),
]
