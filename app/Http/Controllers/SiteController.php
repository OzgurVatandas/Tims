<?php

namespace App\Http\Controllers;

use App\Mail\ContactMail;
use App\Models\Contact;
use App\Models\Project;
use App\Models\Sector;
use App\Models\Slider;
use App\SystemControls\ResultControl;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Mail;

class SiteController extends Controller
{
    protected $data = null;

    public function __construct()
    {
        $this->data['locales'] = Config::get('app.available_locales');
    }

    public function index()
    {
        $data = [];
        $this->data = array_merge($this->data, $data);
        return view("site.index", $this->data);
    }

    public function test()
    {
        $data = [];
        $this->data = array_merge($this->data, $data);
        return view("site.index_new", $this->data);
    }


    // Store contact form
    public function contactPost(Request $request)
    {
        $inputs                 = $request->all();
        $inputs['client_ip']    = $request->getClientIp();

        if (!$request->filled('type'))
            return ResultControl::Error('Eksik Parametre');

        $validation = Contact::makeValidation($inputs,$inputs['type']);

        if (!$validation['success'])
            return ResultControl::Error($validation['message'],$validation['data']);

        $data       = Contact::where([
            'client_ip'     => $inputs['client_ip'],
        ])->orderBy('id','desc')->first();
        if ($data){
            $diff  = $data->created_at->diffInMinutes();
            if (intval($diff) < 3) // limits rate of request in 3 minutes
                return ResultControl::Error('İletişim formunu daha önce gönderdiniz, tekrar göndermek için daha sonra tekrar deneyin!');
        }

        try {
            $mailData = Contact::create($inputs);
            Mail::to('info@ptakademi.com.tr')->send(new ContactMail($mailData));
        }catch (\Exception $e){
            return ResultControl::Error('Bir Hata Oluştu.',$e->getMessage());
        }
        return ResultControl::Success('Kaydınız başarılı şekilde kaydedildi.',$inputs);
    }

    public function notFound(Request $request)
    {
        return view('site.404', $this->data)->with(
            [
                'errorMessage' => 'Aradığınız sayfa bulunamadı',
                'errorCode' => '404'
            ],
        );
    }
}
