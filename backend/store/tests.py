# https://docs.djangoproject.com/en/4.0/topics/testing/tools/

# - Unit test is an isolated test that test one very specific function of our application. It can be done manually but usually automated. 
# - Integration testing is when combines several code functionalities to test that a sequence of models and requests behaves correctly.

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
        product = Product.objects.create(name="TestProduct1", price="123").save()
        product2 = Product.objects.create(name="TestProduct2", price="8888").save()


    # Unit Test
    def test_GetProducts(self):
        response = self.client.get('/store/')

        content = json.loads(response.content.decode('utf-8'))

        TestProduct1Name = None
        TestProduct2Name = None

        for product in content:

            if product['name'] == "TestProduct1":
                TestProduct1Name = "TestProduct1"
            
            if product['name'] == "TestProduct2":
                TestProduct2Name = "TestProduct2"
        
        self.assertEqual(TestProduct1Name, "TestProduct1")
        self.assertEqual(TestProduct2Name, "TestProduct2")


    # Integration Test
    def test_CreateAndGetProducts(self):

        # Creation of product
        data = {"name": "TestProduct3", "price": 123}
        response = self.client.post('/store/create', data=data)

        self.assertEqual(response.status_code, 201)

        response = self.client.get('/store/')
        content = json.loads(response.content.decode('utf-8'))

        TestProduct3Name = None
        for product in content:
            if product["name"] == "TestProduct3":
                TestProduct3Name = "TestProduct3"

        self.assertEqual(TestProduct3Name, "TestProduct3")

