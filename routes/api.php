<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\BannerController;
use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/articles', [ArticleController::class,'show']);
Route::get('/article', [ArticleController::class,'shortShow']);
Route::get('/banners', [BannerController::class,'show']);