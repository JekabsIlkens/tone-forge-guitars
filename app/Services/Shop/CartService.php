<?php

namespace App\Services\Shop;

use App\Models\Cart;
use App\Models\Product;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class CartService
{
    public function getCartItems()
    {
        return Cart::with('product')
            ->where('user_id', Auth::id())
            ->get();
    }

    public function addToCart(array $data)
    {
        $product = Product::findOrFail($data['product_id']);

        if ($product->stock < $data['quantity']) 
        {
            throw new \Exception('Not enough stock available.');
        }

        return Cart::updateOrCreate(
            [
                'user_id' => Auth::id(),
                'product_id' => $data['product_id'],
            ],
            [
                'quantity' => $data['quantity'],
            ]
        );
    }

    public function removeCartItem(int $cartItemId)
    {
        $cartItem = Cart::where('user_id', Auth::id())->findOrFail($cartItemId);
        $cartItem->delete();

        return $cartItem;
    }

    public function processOrder()
    {
        DB::transaction(function () 
        {
            $cartItems = $this->getCartItems();

            foreach ($cartItems as $item) 
            {
                $item->product->decrement('stock', $item->quantity);
            }

            $this->clearCart();
        });
    }

    public function clearCart()
    {
        Cart::where('user_id', Auth::id())->delete();
    }
}
