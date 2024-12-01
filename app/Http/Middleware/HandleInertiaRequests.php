<?php

namespace App\Http\Middleware;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Middleware;
use App\Models\Cart;

class HandleInertiaRequests extends Middleware
{
    protected $rootView = 'app';

    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'url' => $request->getPathInfo(),

            'auth.user' => fn () => $request->user() ? $request->user() : null,

            'routes' => [
                'home' => route('home'),

                'register' => [
                    'create' => route('register'),
                    'store' => route('register.store'),
                ],

                'login' => [
                    'create' => route('login'),
                    'store' => route('login.store'),
                ],

                'logout' => route('logout'),

                'profile' => [
                    'edit' => route('profile.edit'),
                    'address' => [
                        'update' => route('profile.address.update'),
                    ],
                    'password' => [
                        'update' => route('profile.password.update'),
                    ],
                    'destroy' => route('profile.destroy'),
                ],

                'shop' => [
                    'category' => [
                        'index' => route('category.index'),
                    ],
                ],

                'cart' => [
                    'index' => route('cart.index'),
                    'store' => route('cart.store'),
                ],
            ],

            'flash' => [
                'success' => $request->session()->get('success'),      
                'error' => $request->session()->get('error'),
            ],

            'cartCount' => fn () => Auth::check() 
                ? Cart::where('user_id', Auth::id())->sum('quantity') 
                : 0,
        ]);
    }
}
