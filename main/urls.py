from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path('projects/', views.projects, name='projects'),
    path('contact/', views.contact, name='contact'),
    path("test/", views.test, name = "test"),
    path("case-study/<slug:slug>/", views.case_study, name="case_study"),
    path('about/', views.about, name='about'),
    path("case-study/export/", views.export_case, name="export_case"),
    path("concept/textile/", views.textile_concept, name="textile_concept"),
    path("concept/export/", views.export_concept, name="export_concept"),
    path("concept/modern/", views.modern_concept, name="modern_concept"),
]
