<?php

namespace App\Http\Controllers\Auth;

use App\Http\Requests\Auth\RegisterRequest;
use App\Services\Auth\RegisterService;
use Illuminate\Http\RedirectResponse;
use Inertia\Response;

class RegisterController
{
    protected $registerService;

    public function __construct(RegisterService $registerService)
    {
        $this->registerService = $registerService;
    }

    public function create(): Response
    {
        return inertia('Auth/Register');
    }

    public function store(RegisterRequest $request): RedirectResponse
    {
        $this->registerService->createUser($request->validated());

        return redirect()->route('login')->with('success', 'Account created successfully!');
    }
}
