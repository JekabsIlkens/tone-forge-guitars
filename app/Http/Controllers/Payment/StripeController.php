<?php

namespace App\Http\Controllers\Payment;

use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;
use Stripe\Stripe;
use Stripe\Checkout\Session;
use App\Models\Cart;

class StripeController
{
    public function checkout()
    {
        Stripe::setApiKey(env('STRIPE_SECRET'));

        $cartItems = Cart::where('user_id', Auth::id())->with('product')->get();

        $lineItems = $cartItems->map(function ($item) {
            return [
                'price_data' => [
                    'currency' => 'eur',
                    'product_data' => [
                        'name' => $item->product->name,
                        'description' => $item->product->description,
                        'images' => [$item->product->image_url],
                    ],
                    'unit_amount' => $item->product->price,
                ],
                'quantity' => $item->quantity,
            ];
        })->toArray();

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
        $cartItems = Cart::where('user_id', Auth::id())->with('product')->get();

        foreach ($cartItems as $item) 
        {
            $item->product->stock -= $item->quantity;
            $item->product->save();
        }

        Cart::where('user_id', Auth::id())->delete();

        return inertia('Payment/Success');
    }
}
