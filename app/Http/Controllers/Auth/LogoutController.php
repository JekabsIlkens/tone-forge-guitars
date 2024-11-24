<?php

namespace App\Http\Controllers\Auth;

use App\Services\Auth\LogoutService;
use Illuminate\Http\RedirectResponse;

class LogoutController
{
    protected $logoutService;

    public function __construct(LogoutService $logoutService)
    {
        $this->logoutService = $logoutService;
    }

    public function destroy(): RedirectResponse
    {
        $this->logoutService->logoutUser();

        return redirect('/')->with('success', 'Logged out successfully!');
    }
}
