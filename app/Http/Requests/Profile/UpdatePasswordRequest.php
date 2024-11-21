<?php

namespace App\Http\Requests\Profile;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePasswordRequest extends FormRequest
{
    public function rules(): array
    {
        return
            [
                'current_password' =>
                [
                    'required',
                    'string',
                ],
                'new_password' =>
                [
                    'required',
                    'string',
                    'min:8',
                    'regex:/[a-z]/',
                    'regex:/[A-Z]/',
                    'regex:/[0-9]/',
                    'regex:/[@$!%*#?&]/',
                ],
            ];
    }

    public function messages()
    {
        return
            [
                'new_password.regex' => 'Use a mixture of upper/lower case letters, digits and symbols.',
            ];
    }
}
