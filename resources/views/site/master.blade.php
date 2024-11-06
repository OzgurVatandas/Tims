<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{env('APP_NAME')}} @yield('title')</title>
    @include("site.partials.head")
    @include("site.partials.styles")

    @yield("css")
</head>
<body>

<main class="scroll-container">

    @include('site.partials.header')

    @yield("content")

    @include('site.partials.footer')
</main>

@include("site.partials.scripts")
@yield("js")
</body>
</html>
