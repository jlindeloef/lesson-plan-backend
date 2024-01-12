from rest_framework import serializers
from .models import Teacher


class TeacherSerializer(serializers.ModelSerializer):
    """
    Teacher serializer to add the owners profile image
    and fileds to hold the number of reviews related to that
    User and calculation of average rating.
    """
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()
    profile_id = serializers.ReadOnlyField(source='owner.profile.id')
    profile_image = serializers.ReadOnlyField(source='owner.profile.image.url')
    

    def get_is_owner(self, obj):
        """
        returns true if the user making the request
        is the owner of the teacher object
        """
        request = self.context['request']
        return request.user == obj.owner

    class Meta:
        """
        Lists all the filds to be included in
        the data returned by this api
        """
        model = Teacher
        fields = [
            'id', 'owner', 'is_owner', 'profile_id', 'profile_image',
            'profile_image', 'school', 'location',
            'email', 'created_at', 'updated_at',
        ]