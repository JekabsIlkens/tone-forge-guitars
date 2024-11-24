<?php

namespace App\Http\Controllers\Payment;

use Inertia\Inertia;
use Inertia\Response;
use Stripe\Stripe;
use Stripe\Checkout\Session;

class StripeController
{
    public function checkout()
    {
        Stripe::setApiKey(env('STRIPE_SECRET'));

        $session = Session::create([
            'line_items' => [[
                'price_data' => [
                    'currency' => 'eur',
                    'product_data' => [
                        'name' => 'Cort Electric guitar CR100 CRS',
                        'description' => 'CR100 is equipped with a T.O.M. bridge and stop tailpiece which provides enhanced sustain as well as tuning stability and accurate intonation.',
                        'images' => ['https://www.muzikasveikals.lv/image/cache/catalog/gitaras/Cort/CR100_CRS_Cort-1000x1000w.jpg'],
                    ],
                    'unit_amount' => 26900,
                ],
                'quantity' => 1,
            ]],
            'mode' => 'payment',
            'success_url' => route('payment.success'),
            'cancel_url' => route('cart.index'),
        ]);
        
        return Inertia::location($session->url);
    }

    public function success(): Response
    {
        return inertia('Cart/Index');
    }
}
