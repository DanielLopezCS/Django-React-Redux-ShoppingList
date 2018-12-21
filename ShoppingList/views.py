from django.shortcuts import render

# Create your views here.

def HomePage(request):
    print("IN HOMEPAGE");
    return render(request,'ShoppingList/home.html',{})
