@extends('admin.layout.master2')



@section('content')
    <div class="page-content d-flex align-items-center justify-content-center">

        <div class="row w-100 mx-0 auth-page">
            <div class="col-md-6 col-xl-4 mx-auto">
                <div class="card">
                    <div class="row">
                        <div class="col-md-12 ps-md-0">
                            <div class="auth-form-wrapper px-4 py-5">
                                <a href="#" class="noble-ui-logo d-flex justify-content-center mb-2">
                                    <img src="/extras/img/brand-logo.png" class="w-25">
                                </a>
                                <form class="forms-sample" id="loginForm">
                                    <div class="mb-3">
                                        <label for="userEmail" class="form-label">Kullanıcı Adı</label>
                                        <input type="text" name="username" class="form-control" id="userEmail" placeholder="Kullanıcı Adı">
                                    </div>

                                    <div class="mb-3">
                                        <label for="userPassword" class="form-label">Şifre</label>
                                        <input type="password" name="password" class="form-control" id="userPassword" autocomplete="current-password" placeholder="Şifre">
                                    </div>
                                    <div class="form-check mb-3 d-flex justify-content-end">
                                        <input type="checkbox" class="form-check-input" name="remember_token" id="authCheck">
                                        <label class="form-check-label ms-2" for="authCheck">
                                            Beni Hatırla
                                        </label>
                                    </div>
                                    <div class="d-flex justify-content-center">
                                        <button type="submit" class="btn btn-primary me-2 mb-2 mb-md-0">Giriş Yap</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
@endsection

@push('custom-scripts')
    <script type="text/javascript">
        $("#loginForm").on("submit",function(event) {
            event.preventDefault();

            let data = new FormData(this);
            postActionFormData(data,'{{route('login.result')}}', (response) => {
                if(response.success){
                    console.log(response);
                    showToast(response.message,'success',1500);
                    setTimeout(function (){
                        location.href = '{{route('admin.index')}}';
                    },1500);
                }
                else{
                    showToast(response.message,'error');
                    console.log(response.message); console.log('log : '); console.log(response.data);
                }
            });
        });
    </script>
@endpush
