<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Support\Facades\Auth;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Validation\ValidationException;

class LoginController
{
    public function create()
    {
        return inertia('Auth/Login');
    }

    public function store(LoginRequest $request)
    {
        if (!Auth::attempt($request->only('email', 'password'))) 
        {
            throw ValidationException::withMessages(['error' => ['Provided password is incorrect.']]);
        }

        return inertia('Landing');
    }
}