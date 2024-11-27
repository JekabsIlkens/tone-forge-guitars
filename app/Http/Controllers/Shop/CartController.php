<?php

namespace App\Http\Controllers\Shop;

use App\Http\Requests\Cart\AddToCartRequest;
use App\Services\Shop\CartService;

class CartController
{
    protected CartService $cartService;

    public function __construct(CartService $cartService)
    {
        $this->cartService = $cartService;
    }

    public function index()
    {
        $cartItems = $this->cartService->getCartItems();

        return inertia('Cart/Index', [
            'cartItems' => $cartItems,
        ]);
    }

    public function store(AddToCartRequest $request)
    {
        try 
        {
            $this->cartService->addToCart($request->validated());

            return redirect()->back()->with('success', 'Item added to cart!');
        } 
        catch (\Exception $e) 
        {
            return back()->withErrors(['error' => $e->getMessage()]);
        }
    }

    public function destroy($id)
    {
        $this->cartService->removeCartItem($id);

        return redirect()->route('cart.index')->with('success', 'Item removed from cart!');
    }
}
