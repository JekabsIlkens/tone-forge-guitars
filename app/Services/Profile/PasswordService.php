<?php

namespace App\Services\Profile;

use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use App\Models\User;

class PasswordService
{
    public function updatePassword(User $user, array $data): void
    {
        if (!Hash::check($data['current_password'], $user->password)) 
        {
            throw ValidationException::withMessages(['error' => ['The provided password is incorrect.']]);
        }

        $user->update([
            'password' => Hash::make($data['new_password']),
        ]);
    }
}
