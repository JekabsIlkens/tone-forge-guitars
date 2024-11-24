<?php

namespace App\Services\Profile;

use Illuminate\Support\Facades\Auth;
use App\Models\User;

class ProfileService
{
    public function updateProfile(User $user, array $data): void
    {
        $user->update([
            'full_name' => $data['full_name'],
            'email' => $data['email'],
        ]);
    }

    public function deleteUser(User $user): void
    {
        Auth::logout();

        $user->delete();
    }
}
