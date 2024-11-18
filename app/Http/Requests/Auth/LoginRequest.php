<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    public function rules(): array
    {
        return 
        [
            'email' => 
            [
                'required',
                'string',
                'email',
                'max:255',
                'exists:users,email',
            ],
            'password' => 
            [
                'required',
                'string',
                'min:8',
            ],
        ];
    }

    public function messages()
    {
        return 
        [
            'email.exists' => 'Provided email is not linked to an existing account.',
        ];
    }
}