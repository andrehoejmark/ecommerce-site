from .models import *
from rest_framework import status
from rest_framework.response import Response
from django.shortcuts import redirect
from django.conf import settings
from rest_framework.views import APIView
from .serializer import CheckoutSerializer
import stripe

stripe.api_key = settings.STRIPE_SECRET_KEY



class StripeCheckoutView(APIView):

    def post(self, request, *args, **kwargs):
        try:
            
            YOUR_DOMAIN = "http://127.0.0.1:3000"

            serializer = CheckoutSerializer(
                data=request.POST
            )

            print(request.data)

            if serializer.is_valid():

                data = serializer.validated_data


                checkout_session = stripe.checkout.Session.create(
                    line_items=[
                        {
                            "price_data": {
                                "unit_amount": 4000,
                                "currency": 'usd',
                                "product_data": {
                                    "name": "Test Product"
                                },
                            },
                            'quantity': 1,
                        }
                    ],
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
