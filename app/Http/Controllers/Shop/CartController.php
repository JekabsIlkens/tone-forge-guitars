<?php

namespace App\Http\Controllers\Shop;

use Illuminate\Support\Facades\Auth;
use App\Http\Requests\Cart\AddToCartRequest;
use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\Request;

class CartController
{
    public function index()
    {
        $cartItems = Cart::with('product')
        ->where('user_id', Auth::id())
        ->get();

        return inertia('Cart/Index', ['cartItems' => $cartItems]);
    }

    public function store(AddToCartRequest $request)
    {
        $data = $request->validated();

        $product = Product::findOrFail($data['product_id']);

        if ($product->stock < $data['quantity']) {
            return back()->withErrors(['error' => 'Not enough stock available.']);
        }

        Cart::updateOrCreate(
            [
                'user_id' => Auth::id(),
                'product_id' => $data['product_id'],
            ],
            [
                'quantity' => $data['quantity'],
            ]
        );

        return redirect()->route('cart.index')->with('success', 'Item added to cart!');
    }

    public function destroy($id)
    {
        $cartItem = Cart::where('user_id', Auth::id())->findOrFail($id);
        $cartItem->delete();

        return redirect()->route('cart.index')->with('success', 'Item removed from cart!');
    }
}
