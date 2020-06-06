<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Hash;

class UserSettingsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'current_password' => ['required'],
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'exists:users'],
            'cf_handle' => ['required', 'string', 'max:255'],
            'institution' => ['nullable', 'string', 'max:255'],
            'new_password' => ['nullable', 'string', 'max:255'],
            'password_confirmation' => ['nullable', 'string', 'max:255', 'same:new_password'],
        ];
    }

    /**
     * Configure the validator instance.
     *
     * @param  \Illuminate\Validation\Validator  $validator
     * @return void
     */
    public function withValidator($validator)
    {
        $validator->after(function ($validator) {
            if ($this->has('current_password') && !Hash::check($this->current_password, $this->user()->password)) {
                $validator->errors()->add('current_password', 'Password is not correct.');
            }
            if ($this->has('new_password') && strlen(trim($this->new_password)) > 0) {
                if (strlen($this->new_password) < 8) {
                    $validator->errors()->add('new_password', 'Password must be at least 8 characters long.');
                }
            }
        });
    }
}
