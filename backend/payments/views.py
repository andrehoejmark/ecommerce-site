from .models import *
from rest_framework import status
from rest_framework.response import Response
from django.shortcuts import redirect
from django.conf import settings
from rest_framework.views import APIView
from .serializer import CheckoutSerializer
import stripe
from store.models import *
from rest_framework import authentication, permissions


stripe.api_key = settings.STRIPE_SECRET_KEY



class StripeCheckoutView(APIView):

    authentication_classes = []
    permission_classes = [permissions.AllowAny]

    def post(self, request, *args, **kwargs):
        try:
            
            YOUR_DOMAIN = "http://127.0.0.1:3000"

            serializer = CheckoutSerializer(
                data=request.POST
            )


            if serializer.is_valid():

                data = serializer.validated_data


                productIDS = data['productIDS']


                line_items = []
                for productID in productIDS:

                    product = Product.objects.get(pk=productID)

                    productName = product.title
                    productImage = product.image
                    productPrice = int(str(int(product.price)) + "00")

                    line_item = {
                            "price_data": {
                                "unit_amount": productPrice,
                                "currency": 'sek',
                                "product_data": {
                                    "name": productName,
                                },
                            },
                            'quantity': 1,
                    }
                    
                    line_items.append(line_item)

                checkout_session = stripe.checkout.Session.create(
                    line_items=line_items,
                    mode='payment',
                    success_url=YOUR_DOMAIN + '?success=true&session_id={CHECKOUT_SESSION_ID}',
                    cancel_url=YOUR_DOMAIN + '?canceled=true',
                )

                #return Response({"message":str("hello world")}, status = status.HTTP_200_OK)
                return redirect(checkout_session.url)

            else:
                return Response({"errors":str(serializer.errors)}, status = status.HTTP_200_OK)

        except Exception as e:
            print("Exception:" + str(e))
            return Response({"errors":str(e)}, status = status.HTTP_500_INTERNAL_SERVER_ERROR)
