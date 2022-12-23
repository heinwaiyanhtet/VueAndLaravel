<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ArticleController;

Route::get('/',[HomeController::class,'index']);
Route::resource('article',ArticleController::class);

Route::prefix("AdminDashboard")->group(function(){
    Route::get('/home',[DashboardController::class,'index'])->name('home');
});

Route::resource('login',LoginController::class);


