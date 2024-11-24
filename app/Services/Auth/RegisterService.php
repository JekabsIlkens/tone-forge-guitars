<?php

namespace App\Services\Auth;

use App\Models\User;
use Illuminate\Support\Facades\Hash;

class RegisterService
{
    public function createUser(array $data): void
    {
        $data['password'] = Hash::make($data['password']);
        
        User::create($data);
    }
}