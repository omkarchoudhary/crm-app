<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LeadController;

Route::get('/', function () {
    return view('welcome');
});

// Route::apiResource('leads', LeadController::class);

Route::get('/leads', function () {
    return \App\Models\Lead::all();
});