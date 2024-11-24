<?php

namespace App\Services\Auth;

use Illuminate\Support\Facades\Auth;

class LogoutService
{
    public function logoutUser(): void
    {
        Auth::logout();

        session()->invalidate();
        session()->regenerateToken();
    }
}
