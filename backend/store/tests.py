# https://docs.djangoproject.com/en/4.0/topics/testing/tools/

# - Unit test is an isolated test that test one very specific function of our application. It can be done manually but usually automated. 
# - Integration testing is when combines several code functionalities to test that a sequence of models and requests behaves correctly.

# "python manage.py test -v 2" to run

from urllib import response
from django.test import TestCase
from .models import *
import json



# Unit Test
class URLTests(TestCase):
    def test_homepage(self):
        response = self.client.get('/store/')

        self.assertEqual(response.status_code, 200)


class StoreTests(TestCase):

    def setUp(self):
        product = Product.objects.create(title="TestProduct1", price="123").save()
        product2 = Product.objects.create(title="TestProduct2", price="8888").save()


    # Unit Test
    def test_GetProducts(self):
        response = self.client.get('/store/')

        content = json.loads(response.content.decode('utf-8'))

        TestProduct1title = None
        TestProduct2title = None


        for product in content['items']:

            if product['title'] == "TestProduct1":
                TestProduct1title = "TestProduct1"
            
            if product['title'] == "TestProduct2":
                TestProduct2title = "TestProduct2"
        
        self.assertEqual(TestProduct1title, "TestProduct1")
        self.assertEqual(TestProduct2title, "TestProduct2")


    # Integration Test
    def test_CreateAndGetProducts(self):

        # Creation of product
        product = Product.objects.create(title="TestProduct4", price="123").save()

        response = self.client.get('/store/')
        content = json.loads(response.content.decode('utf-8'))

        TestProduct4title = None
        for product in content['items']:
            if product["title"] == "TestProduct4":
                TestProduct4title = "TestProduct4"

        self.assertEqual(TestProduct4title, "TestProduct4")


class PaymentTests(TestCase):


    # Integrations test
    def test_paymentpage(self):
        

        # Create product
        product5 = Product.objects.create(id=99999999999, title="TestProduct5", price="8888").save()


        # Get products
        response = self.client.get('/store/')
        content = json.loads(response.content.decode('utf-8'))

        TestProduct5title = None
        for product in content['items']:
            if product["title"] == "TestProduct5":
                TestProduct5title = "TestProduct5"


        self.assertEqual(TestProduct5title, "TestProduct5")


        data = {"productIDS": [99999999999]}
        response = self.client.post('/payments/create-checkout-session', data=data)

        self.assertEqual(response.status_code, 302)

