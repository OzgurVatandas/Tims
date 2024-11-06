<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Sector;
use App\Models\Slider;
use App\SystemControls\ResultControl;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Validator;
use Yajra\DataTables\DataTables;

class SectorController extends Controller
{
    public $model       = Sector::class;
    public $module      = 'sectors';
    public $showName    = 'Sektör';
    public $data        = null;

    public $uploadPath  = "/site/";

    public function __construct(){
        $this->data['showName'] = $this->showName;
        $this->data['module']   = $this->module;
        $this->uploadPath       .= $this->model;
        $this->data['availableLocales'] = Config::get('app.available_locales');
    }
    public function index()
    {
        return view("admin.$this->module.index",$this->data);
    }

    public function detail($id = null)
    {
        $this->data['data'] = null;

        if ($id)
            $this->data['data'] = $this->model::find($id);


        return view("admin.$this->module.detail", $this->data);
    }

    public function store(Request $request)
    {
        if (!$request->ajax() || !$request->filled('post_type'))
            return ResultControl::Error('Eksik Parametre!');


        $postType   = $request->input('post_type');
        switch ($postType){
            case 111: {
                $inputs     = $request->except(['_token','post_type']);

                $inputs['is_active'] = 0;
                if ($request->filled('is_active') && $request->input('is_active') == 'on')
                    $inputs['is_active'] = 1;

                try {
                    $data   = $this->model::updateOrCreate(['id' => $inputs['id']],$inputs);
                    return ResultControl::Success($this->showName.' Kaydedildi.',$data);
                }catch (\Exception $e){return ResultControl::Error('Kayıt işlemi başarısız',$e->getMessage());}
            }
            case 191: {
                $inputs     = $request->all();
                return $this->sortTable($this->model,$inputs);
            }
            default:
                return ResultControl::Error('Geçersiz istek!');
        }
    }

    public function update(Request $request)
    {
        if (!$request->ajax() || !$request->filled('post_type'))
            return ResultControl::Error('Eksik Parametre!');

        $postType   = $request->input('post_type');
        switch ($postType){
            case 191: {
                $inputs     = $request->all();
                return $this->sortTable($this->model,$inputs);
            }
            default:
                return ResultControl::Error('Geçersiz istek!');
        }
    }

    public function delete(Request $request)
    {
        if ($request->ajax() && $request->filled('post_type')){
            if ($request->input('post_type') == 111){

                $data   = $this->model::where('id',$request->id)->first();
                if ($data){
                    try {
                        $data->delete();
                        return ResultControl::Success('İşlem Başarılı!',$data);
                    }catch (\Exception $e){
                        return ResultControl::Error('Bir hata oluştu!',$e->getMessage());
                    }
                }return ResultControl::Error('Veri bulunamadı!');
            } return ResultControl::Error('Eksik Parametre');
        } return ResultControl::Error('Geçersiz İstek!');
    }

    public function dataservice(Request $request)
    {
        if ($request->ajax() && $request->has('data_type') && $request->input('data_type') == 1) {
            $data = $this->model::orderBy('order','desc');

            return DataTables::of($data)
                ->addIndexColumn()
                ->addColumn('actions',function ($query){
                    $id = $query->id;
                    return "<div>
                        <button onclick='btnDeleteClicked($id)' class='btn p-0 btn-danger w-50 py-1'> <i class='bi bi-trash'></i></button>
                        <button onclick='btnEditClicked($id)' class='btn p-0 btn-warning w-50 text-white py-1'> <i class='bi bi-pencil-square'></i></button>
                    </div>";
                })
                ->addColumn('title',function ($query){
                    return json_decode(json_encode($query->title),true)[App::getLocale()] ?? 'Bilinmiyor';
                })
                ->addColumn('is_active',function ($query){
                    if ($query->is_active == 1)
                        return '<div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" disabled checked>
                            </div>';
                    else
                        return '<div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" disabled>
                    </div>';
                })
                ->addColumn('photo_path',function ($query){
                    return "<img src='$query->photo_path' style='height: 70px;width: 70px'>";
                })
                ->rawColumns(['title','is_active','actions','photo_path'])
                ->make();
        }
        else
            return ResultControl::ErrorJson();
    }
}
