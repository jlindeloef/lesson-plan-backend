from django.urls import path
from teachers import views

urlpatterns = [
    path('teachers/', views.TeacherList.as_view()),
    path('teachers/<int:pk>/', views.TeacherDetail.as_view())
]