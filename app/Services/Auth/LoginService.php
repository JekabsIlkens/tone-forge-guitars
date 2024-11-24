<?php

namespace App\Services\Auth;

use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class LoginService
{
    public function attemptLogin(array $data): void
    {
        $credentials = 
        [
            'email' => $data['email'], 
            'password' => $data['password']
        ];
        
        if (!Auth::attempt($credentials)) {
            throw ValidationException::withMessages([
                'error' => ['Invalid credentials.']
            ]);
        }

        session()->regenerate();
    }
}
