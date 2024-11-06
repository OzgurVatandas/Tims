<?php
    return [
        [
            'module_name'   => 'Yönetim Paneli',
            'module'        => 'dashboard',
            'controller'    => \App\Http\Controllers\Admin\DashboardController::class,
            'icon'          => 'bi bi-ui-radios-grid',
            'rules'         => [
                'except_functions'  => [
                    0 => [],
                    1 => []
                ],
            ],
            'role'          => 0,
            'is_show'       => 0,
        ],
        [
            'module_name'   => 'Sliders',
            'module'        => 'sliders',
            'controller'    => \App\Http\Controllers\Admin\SliderController::class,
            'icon'          => 'bi bi-ui-radios-grid',
            'rules'         => [
                'except_functions'  => [
                    0 => [],
                    1 => []
                ],
            ],
            'role'          => 0,
            'is_show'       => 1,
        ],
        [
            'module_name'   => 'Sektörler',
            'module'        => 'sectors',
            'controller'    => \App\Http\Controllers\Admin\SectorController::class,
            'icon'          => 'bi bi-ui-radios-grid',
            'rules'         => [
                'except_functions'  => [
                    0 => [],
                    1 => []
                ],
            ],
            'role'          => 0,
            'is_show'       => 1,
        ],
        [
            'module_name'   => 'Projeler',
            'module'        => 'projects',
            'controller'    => \App\Http\Controllers\Admin\ProjectController::class,
            'icon'          => 'bi bi-ui-radios-grid',
            'rules'         => [
                'except_functions'  => [
                    0 => [],
                    1 => []
                ],
            ],
            'role'          => 0,
            'is_show'       => 1,
        ],
        [
            'module_name'   => 'Haberler',
            'module'        => 'news',
            'controller'    => \App\Http\Controllers\Admin\NewsController::class,
            'icon'          => 'bi bi-ui-radios-grid',
            'rules'         => [
                'except_functions'  => [
                    0 => [],
                    1 => []
                ],
            ],
            'role'          => 0,
            'is_show'       => 1,
        ],

    ];

