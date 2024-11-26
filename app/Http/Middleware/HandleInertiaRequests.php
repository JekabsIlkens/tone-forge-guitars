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

                'profile' => [
                    'index' => route('profile.index'),
                    'edit' => route('profile.edit'),
                    'destroy' => route('profile.destroy'),
                ],

                'address' => [
                    'update' => route('address.update'),
                ],

                'password' => [
                    'update' => route('password.update'),
                ],

                'logout' => route('logout'),

                'shop' => [
                    'category' => [
                        'index' => route('category.index'),
                    ],
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
