<?php


use Illuminate\Support\Facades\Route;


//** Geliştirme ve test alanı */
    Route::get('/', [\App\Http\Controllers\SiteController::class, 'index'])->name('site.index');
//** Geliştirme ve test alanı Sonu */




// ** Çoklu dil desteği yapısı - config/routes.php'den yönetilir.
Route::group(['middleware' => 'localization'], function () {
    foreach (\Illuminate\Support\Facades\Config::get('routes') as $route){
        foreach ($route['locales'] as $key => $localeRoute){
            Route::get($localeRoute,[\App\Http\Controllers\SiteController::class,$route['funcName']])->name($route['name'].".".$key);
        }
        Route::get('redirect/'.$route['locales']['tr'],[\App\Http\Controllers\SiteController::class,$route['funcName']])->name($route['name']);
    }

    Route::get('/', [\App\Http\Controllers\SiteController::class, 'index'])->name('site.index');
    Route::post('contact-post',[\App\Http\Controllers\SiteController::class,'contactPost'])->name('site.contact.store');
});


// ** Bu alanın altı Auth panel için (gerekli değiştirme)
Route::get('test',[\App\Http\Controllers\SiteController::class,'test'])->name('site.test');
Route::post('contact-post',[\App\Http\Controllers\SiteController::class,'contactPost'])->name('site.contact.store');

Route::get('login', [\App\Http\Controllers\AuthController::class, 'login'])->name('login');
Route::post('login-result', [\App\Http\Controllers\AuthController::class, 'setLogin'])->name('login.result');
Route::get('logout', [\App\Http\Controllers\AuthController::class, 'logout'])->name('logout');
Route::get('register',[\App\Http\Controllers\AuthController::class,'register'])->name('register');
Route::get('404',[\App\Http\Controllers\SiteController::class,'notFound'])->name('site.404');
Route::fallback(function (){
    return redirect()->route('site.404');
});

Route::get('make-storage',function (){
   \Illuminate\Support\Facades\Artisan::call('storage:link');
   return "ok";
});
