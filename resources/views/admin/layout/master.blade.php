<!DOCTYPE html>
<html>
<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="author" content="Furkan Karakaya">

    <link rel="icon" type="image/x-icon" href="/favicon.png">

    <title>{{env('APP_NAME')}} Yönetim Paneli @yield('title')</title>

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet">
  <!-- End fonts -->

  <!-- CSRF Token -->
  <meta name="_token" content="{{ csrf_token() }}">

  <link rel="shortcut icon" href="/site/assets/img/favicon.png'">

  <!-- plugin css -->
  <link href="/admin/assets/fonts/feather-font/css/iconfont.css" rel="stylesheet" />
  <link href="/admin/assets/plugins/flag-icon-css/css/flag-icon.min.css" rel="stylesheet" />
  <link href="/admin/assets/plugins/perfect-scrollbar/perfect-scrollbar.css" rel="stylesheet" />
    <!-- end plugin css -->

  @stack('plugin-styles')

  <!-- common css -->
  <link href="/admin/css/app.css" rel="stylesheet" />
  <!-- end common css -->

    <!-- Sweet alerts -->
    <link href="/admin/assets/plugins/sweetalert2/sweetalert2.min.css" rel="stylesheet" />
    <!-- endSweet alerts -->

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">


    <style>
        .cke_notifications_area { display: none; }
    </style>



    @stack('style')
</head>
<body data-base-url="{{url('/')}}">

  <script src="/admin/assets/js/spinner.js"></script>

  <div class="main-wrapper" id="app">
    @include('admin.layout.sidebar')
    <div class="page-wrapper">
      @include('admin.layout.header')
      <div class="page-content">
        @yield('content')
      </div>
      @include('admin.layout.footer')
    </div>
  </div>

  <!-- Jquery -->
  <script src="https://code.jquery.com/jquery-3.7.0.min.js" integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" crossorigin="anonymous"></script>
  <!-- Jquery -->

    <!-- special js -->
    <script src="/extras/js/functions.js"></script>
    <!-- special js -->

    <!-- base js -->
    <script src="/admin/js/app.js"></script>
    <script src="/admin/assets/plugins/feather-icons/feather.min.js"></script>
    <script src="/admin/assets/plugins/perfect-scrollbar/perfect-scrollbar.min.js"></script>
    <!-- end base js -->

    <!-- plugin js -->
    @stack('plugin-scripts')
    <!-- end plugin js -->

   <!-- Swal -->

   <!-- Swal Ends -->
    <!-- common js -->
    <script src="/admin/assets/js/template.js"></script>
    <!-- end common js -->

  <!-- Sweet alerts -->
  <script src="/admin/assets/plugins/sweetalert2/sweetalert2.min.js"></script>
  <!-- end Sweet alerts -->

    @stack('custom-scripts')

    <script>
        if ("{{\Illuminate\Support\Facades\Session::has('error')}}"){
            console.log('hata');
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 5000,
                timerProgressBar: false,
            });
            Toast.fire({
                icon: 'error',
                title: '{{\Illuminate\Support\Facades\Session::get('error')}}'
            });
        }
    </script>
</body>
</html>
