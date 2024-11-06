<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Session;

class Localization
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        if (Session::has('locale')){
            Config::set('app.locale',Session::get('locale','tr'));
        }

        $routes = Config::get('routes');

        foreach ($routes as $route){

            $currentRoute           = Route::currentRouteName();
            $currentRouteParameters = Route::getCurrentRoute()->parameters();

            $queryString = http_build_query($request->query());

            if ($currentRoute == $route['name']){
                $url = route($route['name'].".".App::getLocale(), $currentRouteParameters) . '?' . $queryString;
                return redirect($url);
            }


            foreach ($route['locales'] as $key => $localeRoute){
                if ($route['name'].".".$key == $request->route()->getName()){
                    if (array_key_exists(App::getLocale(),$route['locales'])
                        && $route['name'].".".App::getLocale() != $request->route()->getName() ){
                        return redirect()->route($route['name'].".".App::getLocale(),$currentRouteParameters);
                    }
                }
            }
        }

        return $next($request);
    }
}
