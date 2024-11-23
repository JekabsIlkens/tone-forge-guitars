<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Profile\ProfileController;
use App\Http\Controllers\Profile\PasswordController;

Route::get('/', function () { return inertia('Home'); })->name('home');

Route::middleware(['guest'])->group(function () {
    Route::get('/register', [RegisterController::class, 'create'])->name('register');
    Route::post('/register', [RegisterController::class, 'store'])->name('register.store');

    Route::get('/login', [LoginController::class, 'create'])->name('login');
    Route::post('/login', [LoginController::class, 'store'])->name('login.store');
});

Route::middleware(['auth'])->group(function () {
    Route::post('/logout', [LogoutController::class, 'destroy'])->name('logout');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::patch('/password', [PasswordController::class, 'update'])->name('password.update');
});

Route::get('/categories', function () { return inertia('Shop/Categories'); })->name('categories');
Route::get('/shop', function () { return inertia('Shop/Index'); })->name('shop.index');
Route::get('/shop/1', function () { return inertia('Shop/Show'); })->name('shop.show');