<?php

namespace App\Http\Requests\Profile;

use Illuminate\Foundation\Http\FormRequest;

class UpdateShippingDetailsRequest extends FormRequest
{
    public function rules(): array
    {
        return
            [
                'address_line_one' =>
                [
                    'required',
                    'string',
                    'max:255',
                ],
                'address_line_two' =>
                [
                    'max:255',
                ],
                'city' =>
                [
                    'required',
                    'string',
                    'max:255',
                ],
                'state_province' =>
                [
                    'required',
                    'string',
                    'max:255',
                ],
                'postal_code' =>
                [
                    'required',
                    'string',
                    'max:255',
                ],
                'country' =>
                [
                    'required',
                    'string',
                    'max:255',
                ],
            ];
    }
}
