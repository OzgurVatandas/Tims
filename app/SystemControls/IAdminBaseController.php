<?php

namespace App\SystemControls;

use Illuminate\Http\Request;

interface IAdminBaseController
{
    public function index();
    public function detail($id = null);
    public function store(Request $request);
    public function update(Request $request);
    public function delete(Request $request);
    public function dataservice(Request $request);

}
