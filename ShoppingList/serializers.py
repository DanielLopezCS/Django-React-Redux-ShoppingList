#Serializer needed for our Job Restful API for Front-End Frameworks such as Vue.js
from rest_framework import serializers
from .models import Item

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ('id','name','description','reciever','price')
