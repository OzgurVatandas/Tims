@extends('admin.layout.master')

@push('plugin-styles')
    <link href="/admin/assets/plugins/datatables-net-bs5/dataTables.bootstrap5.css" rel="stylesheet" />
    <link href="/admin/assets/plugins/@mdi/css/materialdesignicons.min.css" rel="stylesheet" />


    <style>
        th td {
            text-align: center;
        }
        tr td{
            height: 100%;
            align-content: center;
        }
        .div-search-container{
            border : 1.5px solid var(--bs-primary);
            padding: 8px;
            border-radius: 10px;

        }
        .inp-search-container{
            border-width: 0;
        }
        .inp-search-container:focus{
            outline: none;
        }
        .bi-search:hover{
            font-size: 15px!important;
            cursor: pointer;
        }
        .form-check-input:checked{
            background-color: green!important;
            border-color: green!important;
        }
    </style>



@endpush

@section('content')
    <section class="section">
        <div class="section-body">



            <div class="row mb-2">
                <div class="col-12">
                    <div class="card" style="border-radius: 20px">
                        <div class="card-body">
                            <div class="d-flex flex-column flex-md-row align-items-center ">
                                <h4 class="text-primary ">
                                    <i class="bi bi-bar-chart-line-fill"></i>
                                    {{$showName ?? ''}}
                                </h4>
                                <a class="btn btn-primary ms-md-auto me-2 mt-2 rounded-3 px-4" href='{{route("admin.$module.detail")}}'>
                                    Ekle <i class="bi bi-plus-circle-fill mx-1"></i>
                                </a>
                                <div class="div-search-container mt-2">
                                    <input class="inp-search-container" placeholder="{{$showName}} Adı">
                                    <i class="bi bi-search text-primary"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <div class="card" style="border-radius: 20px">
                        <div class="card-body">

                            <div class="table-responsive">
                                <table id="gridDataTable" class="table table-responsive w-100">
                                    <thead >
                                    <tr>
                                        <th scope="col">Fotoğraf</th>
                                        <th scope="col">Başlık</th>
                                        <th scope="col">Aktiflik durumu</th>
                                        <th scope="col">Aksiyonlar</th>
                                    </tr>
                                    </thead>
                                    <tbody id="gridDataTableRow">

                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
@endsection

@push('plugin-scripts')
    <script src="/admin/assets/plugins/datatables-net/jquery.dataTables.js"></script>
    <script src="/admin/assets/plugins/datatables-net-bs5/dataTables.bootstrap5.js"></script>

    <script src="/admin/assets/plugins/sortablejs/Sortable.min.js"></script>
@endpush

@push('custom-scripts')
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ckeditor/4.9.2/ckeditor.js" integrity="sha512-OF6VwfoBrM/wE3gt0I/lTh1ElROdq3etwAquhEm2YI45Um4ird+0ZFX1IwuBDBRufdXBuYoBb0mqXrmUA2VnOA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="/extras/js/row-order.js"></script>

    <script>
        let IsBusy  = false;

        var baseDatatable       = null;
        let baseDatatableUrl    = "{{route('admin.'.$module.'.dataservice')}}?data_type=1";
        let baseFilterData      = '';
        let baseSortUrl         = "{{route('admin.'.$module.".update")}}";

        console.log(baseDatatableUrl);

        $(document).ready(function(){
            baseDatatable = createDatatable("gridDataTable",baseDatatableUrl,baseFilterData,[
                {data   : 'photo_path', 'width' : '20%'},
                {data   : 'title'},
                {data   : 'is_active','width': '15%'},
                {data   : 'actions','width': '15%'},
            ],20,baseSortUrl);
        });

        LoadDataDatatable = async () => await baseDatatable.ajax.url(baseDatatableUrl + baseFilterData).load();

        $(".inp-search-container").on('keyup',function (event){
            console.log(IsBusy);
            if (IsBusy)
                return;

            IsBusy = true
            baseFilterData = '&src=' + $(this).val();
            LoadDataDatatable();
            IsBusy = false;
        });

        btnEditClicked = (_id) => {
            location.href = `{{route("admin.$module.detail")}}/${_id}`;
        }
        btnDeleteClicked = (_id) => {

            let isConfirmed = confirm('Seçtiğiniz satır silinecektir.\nOnaylıyor musunuz? (Bu işlem geri alınamaz!)')
            if (!isConfirmed)
                return false;

            let data = new FormData();
            data.append('id',_id);
            data.append('post_type',111);
            postActionFormData(data,"{{route("admin.$module.delete")}}",(response) => {
                if (response.success){
                    showToast(response.message, 'success');
                    LoadDataDatatable();
                }else{
                    showToast(response.message, 'error',7000);
                    console.log(response.message);
                    console.log('log : ');
                    console.log(response.data);
                }
            });
        }

    </script>
@endpush
