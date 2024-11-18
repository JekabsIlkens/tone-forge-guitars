<?php

namespace App\Http\Controllers\Auth;

use App\Http\Requests\Auth\RegisterRequest;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class RegisterController
{
    public function create()
    {
        return inertia('Auth/Register');
    }

    public function store(RegisterRequest $request)
    {
        $data = $request->validated();
        $data['password'] = Hash::make($data['password']);

        User::create($data);

        return inertia('Auth/Login');
    }
}