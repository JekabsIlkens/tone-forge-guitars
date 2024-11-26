<?php

namespace App\Services\Profile;

use Illuminate\Support\Facades\Auth;
use App\Models\User;

class ProfileService
{
    public function deleteUser(User $user): void
    {
        Auth::logout();

        $user->delete();
    }
}
