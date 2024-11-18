<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () { return inertia('Landing'); });

Route::get('/login', function () { return inertia('Login'); });

Route::get('/register', function () { return inertia('Register'); });
