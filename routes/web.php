<?php

use App\Http\Controllers\AlmacenController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Public/Login');
// });

Route::get('/Welcome', function(){
    return Inertia::render('Welcome');
});
Route::get('/Create', function(){
    return Inertia::render('CRUD/Create');
});
Route::get('/Edit', function(){
    return Inertia::render('CRUD/Edit');
});
Route::post('/Create', [AlmacenController::class, 'store']);
// Route::get('/PaginaPrueba', function(){
//     return Inertia::render('PaginaPrueba');
// });

// Route::resource( '/PaginaPrueba2', PruebaController::class);

Route::resource( '/Index', AlmacenController::class);