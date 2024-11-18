<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class LogoutController
{
    public function destroy()
    {
        Auth::logout(); 
        
        return Inertia::render('Landing');
    }
}