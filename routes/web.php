<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\BannerController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/articles/create', function () {
    return Inertia::render('Articles/AddArticle');
})->middleware(['auth', 'verified'])->name('articles.create');

Route::get('/articles', [ArticleController::class, 'index'])->middleware(['auth', 'verified'])->name('articles');

Route::post('/articles', [ArticleController::class, 'store'])->name('addArticles');
Route::delete('/articles/{article:id}', [ArticleController::class, 'destroy'])->name('articleDelete');

// Route::get('/banner', [BannerController::class, 'index'])->middleware(['auth', 'verified'])->name('banner');
Route::get('/addBanners', function () {
    return Inertia::render('Banners/BannerPages');
})->middleware(['auth', 'verified'])->name('addBanners');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/banner/create', function () {
    return Inertia::render('Banners/Banner');
})->middleware(['auth', 'verified'])->name('banner.create');

Route::post('/banners', [BannerController::class, 'store'])->name('Banner');
Route::get('/banners', [BannerController::class, 'index'])->middleware(['auth', 'verified'])->name('banners');
Route::delete('/banners/{banner:id}', [BannerController::class, 'destroy'])->name('bannerDelete');

require __DIR__ . '/auth.php';
