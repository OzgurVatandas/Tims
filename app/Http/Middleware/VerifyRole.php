<?php

namespace App\Http\Middleware;

use App\Providers\RouteServiceProvider;
use App\SystemControls\ResultControl;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;

class VerifyRole
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
        $system_modules     = Config::get('system_modules');
        $requestRouteName   = explode('.',$request->route()->getName());

        foreach ($system_modules as $fn){
            if ($fn['module'] != $requestRouteName[1])
                continue;

            if (!(Auth::user()->getRole() <= $fn['role'])){
                if ($request->ajax()){
                    return ResultControl::ErrorJson('Bu İşlem İçin Yetkiniz Yok!');
                }
                return redirect()->route('admin.dashboard.index');
            }

            $exceptedFunctions  = $fn['rules']['except_functions'][Auth::user()->getRole()];
            $result             = in_array($requestRouteName[2],$exceptedFunctions);

            if ($result){
                if ($request->ajax()){
                    return ResultControl::ErrorJson('Bu İşlem İçin Yetkiniz Yok!');
                }
                return redirect()->route('admin.dashboard.index');
            }
        }

        return $next($request);
    }
}
