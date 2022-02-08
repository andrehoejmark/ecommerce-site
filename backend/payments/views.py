from .models import *
from django.http import JsonResponse
from django.conf import settings
from django.views import View
import stripe

stripe.api_key = settings.STRIPE_SECRET_KEY


class CreateCheckoutSession(View):

    def post(self, request, *args, **kwargs):
        YOUR_DOMAIN = "http://127.0.0.1:8000"

        checkout_session = stripe.checkout.Session.create(
            line_items=[
                {
                    'price': '{{PRICE_ID}}',
                    'quantity': 1,
                },
            ],
            mode='payment',
            success_url=YOUR_DOMAIN + '?success=true',
            cancel_url=YOUR_DOMAIN + '?canceled=true',
        )

        return JsonResponse({
            'id': checkout_session.id
        })
