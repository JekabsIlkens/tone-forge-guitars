<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Profile\ProfileController;
use App\Http\Controllers\Profile\PasswordController;
use App\Http\Controllers\Shop\CategoryController;
use App\Http\Controllers\Shop\ProductController;
use App\Http\Controllers\Shop\CartController;
use App\Http\Controllers\Payment\StripeController;

Route::get('/', function () { return inertia('Home'); })->name('home');

Route::middleware(['guest'])->group(function () 
{
    Route::get('/register', [RegisterController::class, 'create'])->name('register');
    Route::post('/register', [RegisterController::class, 'store'])->name('register.store')->middleware('throttle:10,1');

    Route::get('/login', [LoginController::class, 'create'])->name('login');
    Route::post('/login', [LoginController::class, 'store'])->name('login.store')->middleware('throttle:10,1');
});

Route::middleware(['auth'])->group(function () 
{   
    Route::post('/logout', [LogoutController::class, 'destroy'])->name('logout');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::patch('/password', [PasswordController::class, 'update'])->name('password.update');
});

Route::prefix('shop')->group(function () 
{
    Route::get('/', [CategoryController::class, 'index'])->name('category.index');
    Route::get('/{category}', [CategoryController::class, 'show'])->name('category.show');
    Route::get('/{category}/{product}', [ProductController::class, 'show'])->name('product.show');
});

Route::middleware(['auth'])->prefix('cart')->group(function () 
{
    Route::get('/', [CartController::class, 'index'])->name('cart.index');
    Route::post('/add', [CartController::class, 'store'])->name('cart.store'); 
    Route::delete('/remove/{id}', [CartController::class, 'destroy'])->name('cart.destroy');
});

Route::post('/stripe', [StripeController::class, 'checkout'])->name('stripe.checkout');
Route::get('/success', [StripeController::class, 'success'])->name('payment.success');
