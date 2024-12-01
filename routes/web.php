<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\{RegisterController, LoginController, LogoutController};
use App\Http\Controllers\Profile\{ProfileController, AddressController, PasswordController};
use App\Http\Controllers\Shop\{CategoryController, ProductController, CartController};
use App\Http\Controllers\Payment\StripeController;

Route::get('/', fn() => inertia('Home'))->name('home');

Route::middleware(['guest'])->group(function () 
{
    Route::get('/register', [RegisterController::class, 'create'])->name('register');
    Route::post('/register', [RegisterController::class, 'store'])->name('register.store')->middleware('throttle:10,1');

    Route::get('/login', [LoginController::class, 'create'])->name('login');
    Route::post('/login', [LoginController::class, 'store'])->name('login.store')->middleware('throttle:10,1');
});

Route::post('/logout', [LogoutController::class, 'destroy'])->name('logout')->middleware('auth');

Route::prefix('categories')->group(function () 
{
    Route::get('/', [CategoryController::class, 'index'])->name('category.index');
    Route::get('/{category}', [CategoryController::class, 'show'])->name('category.show');
    Route::get('/{category}/products/{product}', [ProductController::class, 'show'])->name('product.show');
});

Route::middleware(['auth'])->group(function () 
{   
    Route::prefix('profile')->name('profile.')->group(function () 
    {
        Route::get('/edit', [ProfileController::class, 'edit'])->name('edit');
        Route::patch('/address', [AddressController::class, 'update'])->name('address.update');
        Route::patch('/password', [PasswordController::class, 'update'])->name('password.update');
        Route::delete('/', [ProfileController::class, 'destroy'])->name('destroy');
    });

    Route::prefix('cart')->name('cart.')->group(function () 
    {
        Route::get('/', [CartController::class, 'index'])->name('index');
        Route::post('/', [CartController::class, 'store'])->name('store'); 
        Route::delete('/{id}', [CartController::class, 'destroy'])->name('destroy');
    });

    Route::post('/stripe', [StripeController::class, 'checkout'])->name('stripe.checkout');
    Route::get('/success', [StripeController::class, 'success'])->name('payment.success');
});
