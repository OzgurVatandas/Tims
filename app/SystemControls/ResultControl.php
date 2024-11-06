<?php

namespace App\SystemControls;

class ResultControl
{
    public static function Success($message = '', $data = null, $code = null){
        return ['success' => true, 'message' => $message, 'data' => $data, 'code' => $code];
    }
    public static function Error($message = '', $data = null, $code = 200){
        return ['success' => false, 'message' => $message, 'data' => $data, 'code'=> $code];
    }
    public static function SuccessJson($message = '', $data = null){
        return response()->json(ResultControl::Success($message,$data));
    }
    public static function ErrorJson($message = '', $data = null){
        return response()->json(ResultControl::Error($message,$data));
    }
}
