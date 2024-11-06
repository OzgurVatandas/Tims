<?php

namespace App\Http\Controllers;

use App\SystemControls\ResultControl;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function sortTable($model = null,$data = null)
    {
        try {
            foreach ($data['order_data'] as $orderData){
                $model::where('id',$orderData['id'])->update([
                    'order' => $orderData['new_order']
                ]);
            }
            return ResultControl::Success('Sıralama Değiştirildi');
        }catch (\Exception $exception){
            return ResultControl::Error('Sıralama Hatası, hata mesajını kontrol et',$exception->getMessage());
        }
    }
}
