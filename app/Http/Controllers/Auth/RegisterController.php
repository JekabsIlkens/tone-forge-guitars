<?php

namespace App\Http\Controllers\Auth;

use App\Http\Requests\Auth\RegisterRequest;
use App\Services\Auth\RegisterService;
use App\Services\Auth\LoginService;
use Illuminate\Http\RedirectResponse;
use Inertia\Response;

class RegisterController
{
    protected $registerService;
    protected $loginService;

    public function __construct(RegisterService $registerService, LoginService $loginService)
    {
        $this->registerService = $registerService;
        $this->loginService = $loginService;
    }

    public function create(): Response
    {
        return inertia('Auth/Register');
    }

    public function store(RegisterRequest $request): RedirectResponse
    {
        $this->registerService->createUser($request->validated());
        $this->loginService->attemptLogin($request->validated());

        return redirect()->route('home')->with('success', 'Account created successfully!');
    }
}
