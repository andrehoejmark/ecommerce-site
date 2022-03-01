from django.db import models

# Create your models here.
class Product(models.Model):
    title = models.CharField(max_length=200)
    desc = models.TextField(blank=True, null=True, default=None)
    price = models.FloatField()
    image = models.ImageField(blank=True, null=True, default=None)

    def __str__(self):
        return self.title








# The models below are inspired by another person. It's not something I'm right now using because It's stored in Stripe but better to have it in our own system.
class Customer(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name

class Order(models.Model):
    transaction_id = models.CharField(primary_key=True, max_length=200)
    customer = models.ForeignKey(Customer, on_delete=models.SET_NULL, blank=True, null=True)
    date_ordered = models.DateTimeField(auto_now_add=True)
    complete = models.BooleanField(default=False, null=True, blank=False)

    def __str__(self):
        return str(self.id)

class OrderItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, blank=True, null=True)
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, blank=True, null=True)

    quantity = models.IntegerField(default=0, null=True, blank=True)
    date_added = models.DateTimeField(auto_now_add=True)

# We could make one for europe and us
class ShippingAddress(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.SET_NULL, blank=True, null=True)
    address = models.CharField(max_length=200, null=True)
    city = models.CharField(max_length=200, null=True)
    state = models.CharField(max_length=200, null=True)
    zipcode = models.CharField(max_length=200, null=True)
    date_added = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.address

