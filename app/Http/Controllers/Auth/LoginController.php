<?php

namespace App\Http\Controllers\Auth;

use App\Services\Auth\LoginService;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Inertia\Response;

class LoginController
{
    protected $loginService;

    public function __construct(LoginService $loginService)
    {
        $this->loginService = $loginService;
    }

    public function create(): Response
    {
        return inertia('Auth/Login');
    }

    public function store(LoginRequest $request): RedirectResponse
    {
        $this->loginService->attemptLogin($request->validated());

        return redirect()->intended('/')->with('success', 'Logged in successfully!');
    }
}
