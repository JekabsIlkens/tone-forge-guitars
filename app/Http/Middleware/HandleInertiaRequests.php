<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;

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
                    'update' => route('profile.update'),
                    'destroy' => route('profile.destroy'),
                ],

                'password' => [
                    'update' => route('password.update'),
                ],

                'categories' => route('categories'),

                'shop' => [
                    'index' => route('shop.index'),
                ],
            ],

            'flash' => [
                'success' => $request->session()->get('success'),      
                'error' => $request->session()->get('error'),
            ],
        ]);
    }
}
