<nav class="sidebar">
    <div class="sidebar-header">
        <a href="{{route('admin.dashboard.index')}}" class="sidebar-brand">
            <div>
                <img src="/extras/img/brand-logo.png" style="width: 60px">
            </div>
        </a>
        <div class="sidebar-toggler not-active">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
    <div class="sidebar-body">
        <ul class="nav">
            <li class="nav-item nav-category">Dashboard</li>
            <li class="nav-item nav-category">Yönetim</li>

            @foreach(\Illuminate\Support\Facades\Config::get('system_modules') as $curModule)
                @if($curModule['role'] >= \Illuminate\Support\Facades\Auth::user()->getRole())
                    <li class="nav-item {{$curModule['module'] == $module ? 'active' : ''}} {{$curModule['is_show'] == 1 ? '' : 'd-none'}}">
                        <a href="{{route('admin.'.$curModule['module'].'.index')}}" class="nav-link">
                            <i class="{{$curModule['icon']}}"></i>
                            <span class="link-title ms-3">{{$curModule['module_name'] ?? ''}}</span>
                        </a>
                    </li>
                @endif
            @endforeach


            <li class="nav-item nav-category">Destek</li>

        </ul>
    </div>
</nav>
{{--
<nav class="settings-sidebar">
    <div class="sidebar-body">
        <a href="#" class="settings-sidebar-toggler">
            <i data-feather="settings"></i>
        </a>
        <h6 class="text-muted mb-2">Sidebar:</h6>
    <div class="mb-3 pb-3 border-bottom">
      <div class="form-check form-check-inline">
        <label class="form-check-label">
          <input type="radio" class="form-check-input" name="sidebarThemeSettings" id="sidebarLight" value="sidebar-light" checked>
          Light
        </label>
      </div>
      <div class="form-check form-check-inline">
        <label class="form-check-label">
          <input type="radio" class="form-check-input" name="sidebarThemeSettings" id="sidebarDark" value="sidebar-dark">
          Dark
        </label>
      </div>
    </div>
    <div class="theme-wrapper">
      <h6 class="text-muted mb-2">Light Version:</h6>
      <a class="theme-item active" href="https://www.nobleui.com/laravel/template/demo1/">
        <img src="{{ url('assets/images/screenshots/light.jpg') }}" alt="light version">
      </a>
      <h6 class="text-muted mb-2">Dark Version:</h6>
      <a class="theme-item" href="https://www.nobleui.com/laravel/template/demo2/">
        <img src="{{ url('assets/images/screenshots/dark.jpg') }}" alt="light version">
      </a>
    </div>
  </div>
</nav>
--}}
