<?php

use App\Http\Controllers\API\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::controller(AUthController::class)->group(function () {
    Route::post('/login', 'login');
    Route::post('/register', 'register');


});

Route::middleware('jwt.auth')->group(function () {
    Route::get('/me','me');
});
