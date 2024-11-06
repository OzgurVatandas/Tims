<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\SystemPlateProperties;
use App\Models\SystemPlateTypes;
use App\Models\User;
use App\SystemControls\IAdminBaseController;
use App\SystemControls\ResultControl;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Yajra\DataTables\DataTables;

class UserController extends Controller
{

    public $model       = User::class;
    public $module      = 'users';
    public $showName    = 'Kullanıcılar';
    public $data        = null;

    public function __construct(){
        $this->data['showName'] = $this->showName;
        $this->data['module']   = $this->module;
    }

    public function index()
    {
        return view('admin.'.$this->module.'.index', $this->data);
    }

    public function detail($id = null)
    {
        if ($id != null)
            $this->data['data'] = $this->model::find($id);

        return view('admin.'.$this->module.'.detail', $this->data);
    }

    public function store(Request $request)
    {
        if ($request->ajax() && $request->filled('post_type') && $request->input('post_type') == 111) {

            $validator = Validator::make($request->all(),[
                'name'      => 'bail|required|max:30',
                'username'     => 'bail|required|max:30',
                'email'     => 'bail|required|max:255|unique:users,email,'.$request->id,
                'phone'     => 'bail|required|max:15',
                'password'      => 'bail|required|max:255',
                'password_2'      => 'bail|required|max:255',
            ],[
                'name.required'         => 'İsim Alanı Boş Bırakılamaz!',
                'username.required'     => 'Kullanıcı adı Alanı Boş Bırakılamaz!',
                'email.required'        => 'Email Alanı Boş Bırakılamaz!',
                'phone.required'        => 'Telefon Numarası Alanı Boş Bırakılamaz!',
                'password.required'     => 'Şifre Alanı Boş Bırakılamaz!',
                'password_2.required'   => 'Şifre Doğrulama Alanı Boş Bırakılamaz!',

                'name.max'      => 'İsim Alanı Uzunluğu En Fazla 30 Olabilir',
                'username.max'  => 'Kullanıcı adı Alanı Uzunluğu En Fazla 30 Olabilir',
                'email.max'     => 'Email Alanı Uzunluğu En Fazla 255 Olabilir',
                'phone.max'     => 'Telefon Numarası Alanı Uzunluğu En Fazla 15 Olabilir',
                'password.max'  => 'Şifre Uzunluğu En Fazla 255 Olabilir',
                'password_2.max'=> 'Şifre Doğrulama Alanı Uzunluğu En Fazla 255 Olabilir',

                'email.unique'  => 'Bu E-posta Daha Önce Kullanılmış!'
            ]);

            if ($validator->fails())
                return ResultControl::Error($validator->errors()->first());

            if (strcmp($request->input('password'),$request->input('password_2')) != 0)
                return ResultControl::Error('Girilen Şifreler Uyuşmuyor!');


            $inputs     = $request->except(['_token','post_type','is_photo_removed','password_2']);
            //$inputs['is_active']    = 1;
            $inputs['role']         = 1;
            //$inputs['permission']   = 0;
            $inputs['is_admin']     = 1;
            $inputs['password']     = Hash::make($inputs['password']);


            try {
                $data   = $this->model::updateOrCreate(['id' => $request->input('id')],$inputs);
                return ResultControl::Success($this->showName.' Kaydedildi.',$data);
            }catch (\Exception $e){return ResultControl::Error('Kayıt işlemi başarısız',$e->getMessage());}
        }
        return ResultControl::Error('Geçersiz İstek');
    }

    public function update(Request $request)
    {
        // TODO: Implement update() method.
    }

    public function delete(Request $request)
    {
        // TODO: Implement delete() method.
    }

    public function dataservice(Request $request)
    {
        if ($request->ajax() && $request->has('data_type') && $request->input('data_type') == 1) {
            $data = $this->model::where('role','>',0);

            return DataTables::of($data)
                ->addIndexColumn()
                ->addColumn('edit',function ($query){
                    return "<button onclick='btnEditClicked($query)' class='btn p-0 px-3 py-1 btn-danger'>Düzenle</button>";
                })
                ->addColumn('detail',function ($query){
                    return "<button onclick='btnDetailClicked($query)' class='btn p-0 px-3 py-1 btn-primary'>Detay</button>";
                })
                ->rawColumns(['edit','detail'])
                ->make();
        }
        else
            return ResultControl::ErrorJson();
    }
}
