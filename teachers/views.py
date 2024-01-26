from django.db.models import Count
from rest_framework import generics, permissions, filters
from lesson_plan_backend.permissions import IsOwnerOrReadOnly
from .models import Teacher
from .serializers import TeacherSerializer


class TeacherList(generics.ListCreateAPIView):
    """
    List comments or create a comment if logged in.
    """
    serializer_class = TeacherSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    # Calculate the total number of reviews and an average rating
    # related to each teacher.
    queryset = Teacher.objects.annotate(
        posts_count=Count('owner__post', distinct=True),
        followers_count=Count('owner__followed', distinct=True),
        following_count=Count('owner__following', distinct=True)
    ).order_by('-created_at')

    filter_backends = [
        filters.SearchFilter
    ]

    search_fields = [
        'owner__username',
        'teacher',
        'location',
        'school',
    ]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class TeacherDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve a comment, or update or delete it by id if you own it.
    """
    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = TeacherSerializer
    queryset = Teacher.objects.annotate(
        posts_count=Count('owner__post', distinct=True),
        followers_count=Count('owner__followed', distinct=True),
        following_count=Count('owner__following', distinct=True)
    ).order_by('-created_at')
