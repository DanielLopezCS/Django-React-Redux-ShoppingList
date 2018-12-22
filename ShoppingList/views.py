from django.shortcuts import render
from.models import Item
from rest_framework import viewsets
from .serializers import ItemSerializer

# Create your views here.

class ItemViewAPI(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer


def HomePage(request):
    print("IN HOMEPAGE");
    return render(request,'ShoppingList/home.html',{})
