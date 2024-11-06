<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Client;
use App\Models\ClientMaterial;
use App\Models\Contact;
use App\Models\Order;
use App\Models\Stock;
use App\SystemControls\IAdminBaseController;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public $model       = null;
    public $name        = 'dashboard';
    public $showName    = 'Yönetim Paneli';
    public $data        = null;

    public function __construct(){
        $this->data['showName'] = $this->showName;
        $this->data['name']     = $this->name;
        $this->data['module']   = $this->name;
    }
    public function index()
    {
        return view('admin.index',$this->data);
    }

    public function detail($id = null)
    {
        // TODO: Implement detail() method.
    }

    public function store(Request $request)
    {
        // TODO: Implement store() method.
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
        // TODO: Implement dataservice() method.
    }
}
