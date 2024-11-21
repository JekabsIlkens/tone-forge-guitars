<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;

class LogoutController
{
    public function destroy(): RedirectResponse
    {
        Auth::logout();

        return redirect('/');
    }
}
