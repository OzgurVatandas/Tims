@extends('admin.layout.master')

@push('plugin-styles')
    <link href="/admin/assets/plugins/simplemde/simplemde.min.css" rel="stylesheet"/>
    <link href="/admin/assets/plugins/dropify/css/dropify.min.css" rel="stylesheet"/>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

@endpush

@push('style')
    <style>
        .cke_notifications_area { display: none; }
    </style>
@endpush

@section('content')

    <section class="section">
        <div class="section-body">

        <div class="row">
            <div class="col-12">
                <div class="card" style="border-radius: 20px">
                    <div class="card-body row">
                        <div class="col-12 d-flex align-items-center justify-content-center">
                            <h4 class="text-primary text-center under fw-bold">
                                <i class="fa fa-gear me-2"></i>{{$showName}} Bilgileri</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12">
                <form id="pageForm">

                    <div class="row d-flex justify-content-end mt-3">

                        <div class="col-12 col-sm-4">
                            <div class="card mt-md-0 mt-2 mb-2 p-4" style="border-radius: 20px">

                                <label for="construction_site" class="form-label fw-bold">{{$showName}} İnşaat Alanı</label>
                                <input type="text" class="form-control"
                                       id="construction_site" value="{{$data->construction_site ?? ''}}"
                                       name="construction_site" placeholder="İnşaat Alanı">

                            </div>

                            <div class="card mt-md-0 mt-2 mb-2 p-4" style="border-radius: 20px">

                                <label for="count_housing" class="form-label fw-bold">{{$showName}} Konut Sayısı</label>
                                <input type="text" class="form-control"
                                       id="count_housing" value="{{$data->count_housing ?? ''}}"
                                       name="count_housing" placeholder="Konut Sayısı">

                            </div>

                            <div class="card mt-md-0 mt-2 mb-2 p-4" style="border-radius: 20px">

                                <label for="architecture" class="form-label fw-bold">{{$showName}} Mimar</label>
                                <input type="text" class="form-control"
                                       id="architecture" value="{{$data->architecture ?? ''}}"
                                       name="architecture" placeholder="Proje Mimarı">

                            </div>
                        </div>

                        <div class="col-12 col-sm-4">
                            <div class="card mt-md-0 mt-2 mb-2" style="border-radius: 20px">
                                <div class="card-body">
                                    <h5 class="fw-bold text-center ">{{$showName ?? ''}} Kapak Fotoğrafı</h5>
                                    <p class="text-muted mt-1 text-center">*Tekli seçim yapın, çoklu seçilen fotoğraflar desteklenmez</p>


                                    <div class="input-group mt-4">
                                                       <span class="input-group-btn">
                                                         <a id="lfm" data-input="thumbnail" data-preview="holder" class="btn btn-primary">
                                                           <i class="fa fa-picture-o"></i> Fotoğraf Seç
                                                         </a>
                                                       </span>
                                        <input id="thumbnail" class="form-control" type="text" name="cover_photo_path" value="{{$data->cover_photo_path ?? ''}}">
                                    </div>
                                    <div id="holder" style="margin-top:15px;">
                                        @if(isset($data) && $data->cover_photo_path != '')
                                            <div class="col">

                                                <img src="{{$data->cover_photo_path}}" class="w-100 p-3 border" style="
                                        border-radius: 20px; aspect-ratio: 1;
                                        object-position: center;object-fit: contain">

                                            </div>
                                        @endif
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-sm-4">

                            <div class="card mb-2" style="border-radius: 20px">
                                <div class="card-body row">

                                    <label for="sector_id" class="mb-0 form-label fw-bold">{{$showName}} Sektör</label>
                                    <select class="form-control form-select" name="sector_id">
                                        <option value="0">Seçilmedi</option>
                                        @foreach($sectors as $sector)
                                            <option
                                                @if(isset($data) && $data->sector_id == $sector->id)
                                                    selected
                                                @endif

                                                value="{{$sector->id}}">{{$sector->title['tr'] ?? ''}}</option>
                                        @endforeach
                                    </select>

                                </div>
                            </div>

                            <div class="card mb-2" style="border-radius: 20px">
                                <div class="card-body row">

                                    <div class="col-12 d-flex justify-content-center  ">
                                        <div class="form-check form-switch">
                                            <label for="is_active" class="mb-0 form-label fw-bold">{{$showName}} Aktiflik Durumu</label>
                                            <input class="form-check-input" type="checkbox" name="is_active" role="switch" id="is_active"
                                                   @if($data->is_active ?? false) checked @endif >
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div class="card mb-2" style="border-radius: 20px">
                                <div class="card-body row px-5">

                                    <button type="submit" class="btn btn-primary">Değişiklikleri Kaydet</button>

                                </div>
                            </div>

                        </div>

                        <div class="col-12 ">
                            <div class="card mt-md-0 mt-2 mb-2" style="border-radius: 20px">
                                <div class="card-body">
                                    <h5 class="fw-bold text-center ">{{$showName ?? ''}} İç Mekan Fotoğrafları</h5>
                                    <p class="text-muted mt-1 text-center">*Çoklu seçim yapılabilir.</p>

                                    <div class="input-group mt-4">
                                                       <span class="input-group-btn">
                                                         <a id="lfm-interior" data-input="interior-thumbnail" data-preview="interior-holder" class="btn btn-primary">
                                                           <i class="fa fa-picture-o"></i> Fotoğraf Seç
                                                         </a>
                                                       </span>
                                        <input id="interior-thumbnail" class="form-control" type="text" name="interior_photo_paths" value="{{$data->interior_photo_paths ?? ''}}">
                                    </div>
                                    <div id="interior-holder" class="row" style="margin-top:15px;">
                                        @if(isset($data) && $data->interior_photo_paths != '')
                                            @foreach(explode(',',$data->interior_photo_paths) as $interiorPhotos)
                                                <div class="col-12 col-md-4 col-lg-3">
                                                    <img src="{{$interiorPhotos}}" class="w-100 p-3 border" style="
                                            border-radius: 20px; aspect-ratio: 1;
                                            object-position: center;object-fit: contain">
                                                </div>
                                            @endforeach
                                        @endif
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 ">
                            <div class="card mt-md-0 mt-2 mb-2" style="border-radius: 20px">
                                <div class="card-body">
                                    <h5 class="fw-bold text-center ">{{$showName ?? ''}} Dış Mekan Fotoğrafları</h5>
                                    <p class="text-muted mt-1 text-center">*Çoklu seçim yapılabilir.</p>

                                    <div class="input-group mt-4">
                                                       <span class="input-group-btn">
                                                         <a id="lfm-exterior" data-input="exterior-thumbnail" data-preview="exterior-holder" class="btn btn-primary">
                                                           <i class="fa fa-picture-o"></i> Fotoğraf Seç
                                                         </a>
                                                       </span>
                                        <input id="exterior-thumbnail" class="form-control" type="text" name="exterior_photo_paths" value="{{$data->exterior_photo_paths ?? ''}}">
                                    </div>
                                    <div id="exterior-holder" class="row" style="margin-top:15px;">
                                        @if(isset($data) && $data->exterior_photo_paths != '')
                                            @foreach(explode(',',$data->exterior_photo_paths) as $exteriorPhoto)
                                                <div class="col-12 col-md-4 col-lg-3">
                                                    <img src="{{$exteriorPhoto}}" class="w-100 p-3 border" style="
                                            border-radius: 20px; aspect-ratio: 1;
                                            object-position: center;object-fit: contain">
                                                </div>
                                            @endforeach
                                        @endif
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 ">
                            <div class="card mt-md-0 mt-2 mb-2" style="border-radius: 20px">
                                <div class="card-body">
                                    <h5 class="fw-bold text-center ">{{$showName ?? ''}} Kat Planları</h5>
                                    <p class="text-muted mt-1 text-center">*Çoklu seçim Yapılamaz!</p>

                                    <div class="d-flex justify-content-end">
                                        <button type="button" onclick="btnAddPlanClicked()" class="btn text-primary">Plan Ekle</button>
                                    </div>

                                    <div class="floor-plan-container row">

                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="col-12 ">
                            <div class="card mt-md-0 mt-2 mb-2" style="border-radius: 20px">
                                <div class="card-body">
                                    <h5 class="fw-bold text-center ">{{$showName ?? ''}} Olanakları</h5>
                                    <p class="text-muted mt-1 text-center">*Çoklu seçim Yapılamaz!</p>

                                    <div class="d-flex justify-content-end">
                                        <button type="button" onclick="btnAddOpportunityClicked()" class="btn text-primary">Olanak Ekle</button>
                                    </div>

                                    <div class="opportunity-container row">

                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="col-12">
                            <div class="card mt-md-0 mt-2 mb-2 p-4" style="border-radius: 20px">

                                <label for="map_url" class="form-label fw-bold">{{$showName}} Harita URL'si</label>
                                <input type="text" class="form-control"
                                       id="map_url" value="{{$data->map_url ?? ''}}"
                                       name="map_url" placeholder="Harita URL'si">

                            </div>
                        </div>

                    </div>

                    <input hidden id="data-id" name="id" value="{{$data->id ?? ''}}">

                </form>
            </div>

            <div class="col-12 mt-3">
                <div class="card" style="border-radius: 20px">
                    <div class="card-body">
                        <h4 class="text-primary text-center under fw-bold">Çoklu Dil Özellikler</h4>
                    </div>
                </div>
            </div>

            <div class="col-sm-10 col-12">
                <div class="tab-content" id="lineTabContent">
                    @foreach($availableLocales as $key =>  $locale)
                        <div class="tab-pane fade {{$key == 0 ? 'show active' : ''}}" id="tab-single-{{$locale}}" role="tabpanel" aria-labelledby="{{$locale}}-line-tab">

                            <form class="language-form">
                                <div class="row">


                                    <div class="col-12 mt-2">
                                        <div class="card col-12" style="border-radius: 20px">
                                            <div class="card-body row">

                                                <div class="col-12 d-flex justify-content-start mt-2 mb-4">
                                                    <input class="form-check-input" type="radio" name="locale" id="locale" value="{{$locale}}" checked>
                                                    <label class="form-check-label ms-2" for="flexRadioDefault2">
                                                        Dil : {{strtoupper($locale ?? '')}}
                                                    </label>
                                                </div>

                                                <div class="mb-3 col-md-12 col-12">
                                                    <label for="title" class="form-label fw-bold">{{$showName}} Başlığı</label>
                                                    <input type="text" class="form-control"
                                                           id="title" value="{{$data->title[$locale] ?? ''}}"
                                                           name="title[{{$locale}}]" placeholder="Başlık">
                                                </div>

                                                <div class="mb-3 col-12">
                                                    <label for="description" class="form-label fw-bold">{{$showName}} Açıklaması</label>
                                                    <textarea class="w-100 form-control textarea-about" name="description[{{$locale}}]" id="description-{{$locale}}"  rows="5">{{$data->description[$locale] ?? ''}}</textarea>
                                                </div>

                                                <div class="mb-3 col-md-12 col-12">
                                                    <label for="short_description" class="form-label fw-bold">{{$showName}} Kısa Başlığı</label>
                                                    <input type="text" class="form-control"
                                                           id="short_description" value="{{$data->short_description[$locale] ?? ''}}"
                                                           name="short_description[{{$locale}}]" placeholder="Kısa Açıklama">
                                                </div>


                                                <div class="mb-3 col-md-12 col-12">
                                                    <label for="location" class="form-label fw-bold">{{$showName}} Lokasyon</label>
                                                    <input type="text" class="form-control"
                                                           id="location" value="{{$data->location[$locale] ?? ''}}"
                                                           name="location[{{$locale}}]" placeholder="İstanbul/ Türkiye">
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </form>

                        </div>
                    @endforeach
                </div>
            </div>

            <div class="col-sm-2 col-12">
                <div class="card mt-2" style="border-radius: 20px">
                    <div class="card-body row">

                        <div>
                            <h5 class=" text-primary pb-3 fw-bolder text-center ">Dil Seçin</h5>
                            <ul class="nav nav-tabs nav-tabs-line d-flex flex-column" id="lineTab" role="tablist">
                                @foreach($availableLocales as $key =>  $locale)
                                    <li class="nav-item">
                                        <a class="nav-link text-center {{$key == 0 ? 'active' : ''}}" id="{{$locale}}-line-tab"  data-bs-toggle="tab" data-bs-target="#tab-single-{{$locale}}" role="tab" aria-controls="home" aria-selected="true">{{strtoupper($locale)}}</a>
                                    </li>
                                @endforeach
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

        </div>



        <input hidden="hidden" id="room_types_container" type="text" value="{{json_encode($data->room_types ?? '')}}">
        <input hidden="hidden" id="opportunities_container" type="text" value="{{json_encode($data->opportunities ?? '')}}">

        </div>
    </section>
@endsection

@push('plugin-scripts')
@endpush

@push('custom-scripts')

    <script src="/extras/js/file-manager.js" type="text/javascript"></script>
    <script src="https://cdn.ckeditor.com/4.20.2/full/ckeditor.js"></script>

    <script>

        let dataId          = $("#data-id");

        let prepareForm = () => {
            let formData = new FormData();
            formData.append('post_type',111);

            let pageForm    = $("#pageForm").serializeArray();

            pageForm.forEach(n => {
                formData.append(n.name, n.value);
            });

            $.each($(".language-form"), (i,f) => {
                let localeArray = $(f).serializeArray();
                localeArray.forEach(t => {
                    formData.append(t.name, t.value);
                });

                let locale = $(f).find(':input[name=locale]').val();
                formData.append(`description[${locale}]`,CKEDITOR.instances[$(f).find('textarea').attr('id')].getData());
            });


            postActionFormData(formData, "{{route("admin.$module.store")}}", (response) => {
                if (response.success) {
                    console.log(response);
                    showToast(response.message, 'success', 1500);
                    dataId.val(response.data.id);
                    window.history.replaceState("", "Detay Sayfası", '{{route("admin.$module.detail")}}/' + dataId.val());
                } else {
                    showToast(response.message, 'error',7000);
                    console.log(response.message);
                    console.log('log : ');
                    console.log(response.data);
                }
            });
        }


        $("#pageForm").on('submit',function (event){
            event.preventDefault();
            prepareForm();
        });

        lfm('lfm-exterior', {type: 'image',isMultiple: true});
        lfm('lfm-interior', {type: 'image',isMultiple: true});

        $( () => {
            $.each($(".textarea-about"), (i,f) => {
                CKEDITOR.replace($(f).attr('id'), options);
            });

            let parsedData = (JSON).parse($("#room_types_container").val());
            Object.keys(parsedData).forEach(key => {
                btnAddPlanClicked(key,parsedData[key])
            });

            let parsedDataOpportunity = (JSON).parse($("#opportunities_container").val());
            Object.keys(parsedDataOpportunity).forEach(key => {
                btnAddOpportunityClicked(key,parsedDataOpportunity[key])
            });
        });


        let btnAddPlanClicked = (_time = '', _item = {}) => {
            let currentTime;
            if(_time !== ''){ currentTime = _time; }
            else { currentTime = Date.now(); }

            let scheme = floorScheme(currentTime,_item);
            $(".floor-plan-container").append(scheme);
            lfm(`lfm-${currentTime}`,{type: 'image'});
        }
        let btnAddOpportunityClicked = (_time = '', _item = {}) => {
            let currentTime;
            if(_time !== ''){ currentTime = _time; }
            else { currentTime = Date.now(); }

            let scheme = opportunityScheme(currentTime,_item);
            $(".opportunity-container").append(scheme);
            lfm(`lfm-${currentTime}`,{type: 'image'});
        }

        let floorScheme = (_time, _item = {}) => {
            return `<div class="col-12 col-md-4 border p-3 container-floor-${_time}" style="border-radius: 20px">`+
                `<button type="button" class="text-danger btn" onclick="removeFloorPlan(${_time})">Kaldır</button>` +
                `<div class="input-group mt-4"> <span class="input-group-btn"> <a id="lfm-${_time}" data-input="${_time}-thumbnail" data-preview="${_time}-holder" class="btn btn-primary"> <i class="fa fa-picture-o"></i> Fotoğraf Seç </a> </span>` +
                `<input id="${_time}-thumbnail" class="form-control" type="text" name="room_types[${_time}][floor_photo_path]" value="${_item.floor_photo_path ?? ''}"></div>` +
                `<div id="${_time}-holder" class="row" style="margin-top:15px;"><div class="col-12">` +
                `<img src="${_item.floor_photo_path ?? ''}" class="w-100 p-3 border" style="border-radius: 20px; aspect-ratio: 1; object-position: center;object-fit: contain"> </div>` +
                '</div>' +
                `<div class="mt-2"> <label for="pure_square_meter" class="form-label fw-bold">Net Metrekare</label> <input type="text" class="form-control" id="pure_square_meter" value="${_item.pure_square_meter ?? ''}" name="room_types[${_time}][pure_square_meter]" placeholder="Net Metrekare"></div>` +
                `<div class="mt-2"> <label for="gross_square_meter" class="form-label fw-bold">Brüt Metrekare</label> <input type="text" class="form-control" id="gross_square_meter" value="${_item.gross_square_meter ?? ''}" name="room_types[${_time}][gross_square_meter]" placeholder="Brüt Metrekare"></div>` +
                `<div class="mt-2"> <label for="room_type" class="form-label fw-bold">Oda Tipi</label> <input type="text" class="form-control" id="room_type" value="${_item.room_type ?? ''}" name="room_types[${_time}][room_type]" placeholder="Oda Tipi"></div>` +
                '</div>';
        }
        let opportunityScheme = (_time, _item = {}) => {
            return `<div class="col-12 col-md-4 border p-3 opportunity-${_time}" style="border-radius: 20px">`+
                `<button type="button" class="text-danger btn" onclick="removeOpportunity(${_time})">Kaldır</button>` +
                `<div class="mt-2"> <label for="icon_class" class="form-label fw-bold">Ikon Class</label> <input type="text" class="form-control" id="icon_class" value="${_item.icon_class ?? ''}" name="opportunities[${_time}][icon_class]" placeholder="Icon Class (bi bi-vehicle-front)"></div>` +
                `<div class="mt-2"> <label for="title" class="form-label fw-bold">Olanak Adı</label> <input type="text" class="form-control" id="title" value="${_item.title ?? ''}" name="opportunities[${_time}][title]" placeholder="Olanak Adı"></div>` +
                '</div>';
        }

        let removeFloorPlan = (_time) => {
            console.log(_time);
            $(`.container-floor-${_time}`).remove();
        }
        let removeOpportunity = (_time) => {
            $(`.opportunity-${_time}`).remove();
        }
    </script>

@endpush
