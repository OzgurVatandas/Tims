<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\SystemControls\ResultControl;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{

    public function index(){
        return redirect()->route('admin.dashboard.index');
    }
    public function login(){
        return view("admin.login");
    }

    public function logout(){
        if (Auth::check())
            Auth::logout();
        return redirect()->route('login');
    }

    public function setLogin(Request $request){
        if (!$request->filled('username') || !$request->filled('password'))
            return ResultControl::Error('Eksik Parametre');

        $username   = $request->username;
        $password   = $request->password;
        $data       = User::where('username',$username)->first();

        if (!$data)
            return ResultControl::Error("Kullanıcı Bulunamadı");

        if (!(Hash::check($password,$data->password)))
            return ResultControl::Error('Mail adı veya şifre hatalı');

        if (Auth::check())
            Auth::logout();

        $rememberMe  = false;
        if ($request->filled('remember_token'))
            $rememberMe = true;

        Auth::login($data,$rememberMe);
        return ResultControl::Success('Giriş Başarılı');
    }

    public function register(){

        $user = new User();
        $user->name = 'Erta İnşaat';
        $user->phone = 00000000;
        $user->email = 'erta@pistontest.com';
        $user->username = 'ertainsaat';
        $user->password = Hash::make('ErtaInsaat2024@.');
        $user->is_admin = 1;
        $user->role = 0;
        $user->save();

        return $user;
    }
}
