<?php

namespace App\Http\Controllers\Payment;

use App\Services\Payment\StripeService;
use App\Services\Shop\CartService;
use Inertia\Inertia;
use Stripe\Stripe;
use Stripe\Checkout\Session;

class StripeController
{
    protected StripeService $stripeService;
    protected CartService $cartService;

    public function __construct(StripeService $stripeService, CartService $cartService)
    {
        $this->stripeService = $stripeService;
        $this->cartService = $cartService;
    }

    public function checkout()
    {
        $cartItems = $this->cartService->getCartItems();

        if ($cartItems->isEmpty()) {
            return redirect()->back()->with('error', 'Your cart is empty!');
        }

        $lineItems = $this->stripeService->getLineItems($cartItems);

        Stripe::setApiKey(env('STRIPE_SECRET'));

        $session = Session::create([
            'line_items' => $lineItems,
            'mode' => 'payment',
            'success_url' => route('payment.success'),
            'cancel_url' => route('cart.index'),
        ]);
        
        return Inertia::location($session->url);
    }

    public function success()
    {
        $this->cartService->processOrder();

        return inertia('Payment/Success');
    }
}
