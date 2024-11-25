<?php

namespace App\Services\Payment;

class StripeService
{
    public function getLineItems($cartItems)
    {
        return $cartItems->map(function ($item) {
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
    }
}
