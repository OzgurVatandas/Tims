<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\SystemControls\ResultControl;
use Illuminate\Http\Request;
class ApiController extends Controller
{
    public function appConfig()
    {
        $data['appName']   = env('APP_NAME');
        return ResultControl::Success('',$data);
    }
}
