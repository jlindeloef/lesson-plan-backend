from django.db import models
from django.contrib.auth.models import User


class Teacher(models.Model):
    """
    Teacher model, related to User
    """
    owner = models.OneToOneField(User, on_delete=models.CASCADE)
    teacher = models.CharField(max_length=255)
    school = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    email = models.EmailField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        """
        Orders the objects by latest created first
        """
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.owner}'s Teacher Details"