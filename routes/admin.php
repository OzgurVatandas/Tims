<?php

use Illuminate\Support\Facades\Route;


Route::get('/', [\App\Http\Controllers\Admin\DashboardController::class,'index'])->name('admin.index');
Route::get('/index', [\App\Http\Controllers\Admin\DashboardController::class,'index'])->name('admin.index');

$modules    = \Illuminate\Support\Facades\Config::get('system_modules');
foreach ($modules as $module) {
    Route::group(['prefix' => $module['module']],function () use ($module){
        Route::get('/',[$module['controller'],'index'])->name('admin.'.$module["module"].'.index');
        Route::post('/store',[$module['controller'],'store'])->name('admin.'.$module["module"].'.store');
        Route::post('/update',[$module['controller'],'update'])->name('admin.'.$module["module"].'.update');
        Route::post('/delete',[$module['controller'],'delete'])->name('admin.'.$module["module"].'.delete');
        Route::get('/dataservice',[$module['controller'],'dataservice'])->name('admin.'.$module["module"].'.dataservice');

        Route::get('values',[$module['controller'],'valuesData'])->name('admin.'.$module["module"].'.values');
        Route::get('detail/{id?}',[$module['controller'],'detail'])->name('admin.'.$module["module"].'.detail');
    });
}

Route::group(['prefix' => 'laravel-filemanager'], function () {
    \UniSharp\LaravelFilemanager\Lfm::routes();
});
