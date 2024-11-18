<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Support\Facades\Auth;

class LogoutController
{
    public function destroy()
    {
        Auth::logout(); 
        
        return redirect('/');
    }
}