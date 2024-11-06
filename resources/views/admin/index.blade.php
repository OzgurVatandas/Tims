@extends('admin.layout.master')

@push('plugin-styles')
    <link href="/admin/assets/plugins/fullcalendar/main.min.css" rel="stylesheet" />
@endpush

@section('content')
    <div class="row mb-2">
        <div class="col-12">
            <div class="card" style="border-radius: 20px">
                <div class="card-body">
                    <div class="d-flex flex-column flex-md-row align-items-center ">
                        <h4 class="text-primary ">
                            <i class="bi bi-ui-radios-grid"></i>
                            {{env('APP_NAME')}} Yönetim Paneli
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@push('plugin-scripts')
    <script src="/admin/assets/plugins/fullcalendar/main.min.js"></script>
@endpush

@push('custom-scripts')
    <script src="/admin/assets/js/fullcalendar.js"></script>
@endpush
