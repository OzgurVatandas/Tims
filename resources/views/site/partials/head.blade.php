<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-xxxxxxxx"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-xxxxxxxx');
</script>

<link href="/site/plugins/css/bootstrap.css" rel="stylesheet">


<link rel="icon" href="/favicon.jpg"/>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>
<link rel="stylesheet" href="https://use.typekit.net/ceb3fzg.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
<link href="/site/plugins/css/aos.css" rel="stylesheet">
<link href="/site/assets/css/app.css" rel="stylesheet">
<link href="/site/plugins/fontawesome/css/fontawesome.css" rel="stylesheet"/>
<link href="/site/plugins/fontawesome/css/brands.css" rel="stylesheet"/>
<link href="/site/plugins/fontawesome/css/solid.css" rel="stylesheet"/>


<meta name="_token" content="{{csrf_token()}}">
<meta property="og:site_name" content="{{env('APP_NAME')}}">
<meta property="og:title" content="{{env('APP_NAME')}}"/>
<meta property="og:description" content="Modern ve Sıcak Mimari Tasarım"/>
<meta property="og:image" content="/favicon.png"/>
<meta property="og:type" content="website"/>
<meta property="og:updated_time" content="{{\Illuminate\Support\Carbon::now()}}"/>
