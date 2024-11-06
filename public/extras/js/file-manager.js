let options = {
    filebrowserImageBrowseUrl: '/auth/laravel-filemanager?type=Images',
    filebrowserImageUploadUrl: '/auth/laravel-filemanager/upload?type=Images&_token=',
    filebrowserBrowseUrl: '/auth/laravel-filemanager?type=Files',
    filebrowserUploadUrl: '/auth/laravel-filemanager/upload?type=Files&_token='
};



let lfm = function(id,options) {
    let button = document.getElementById(id);

    button.addEventListener('click', function () {
        var route_prefix = (options && options.prefix) ? options.prefix : '/auth/laravel-filemanager';
        var target_input = document.getElementById(button.getAttribute('data-input'));
        var target_preview = document.getElementById(button.getAttribute('data-preview'));

        window.open(route_prefix + '?type=' + options.type || 'file', 'FileManager', 'width=%100,height=750');
        window.SetUrl = function (items) {
            var file_path = items.map(function (item) {
                item.url    = new URL(item.url).pathname;
                return item.url;
            }).join(',');

            target_input.value = file_path;
            target_input.dispatchEvent(new Event('change'));

            $(target_preview).html('');

            // set or change the preview image src
            items.forEach(function (item) {
                let div = document.createElement('div');
                if (options.isMultiple === true)
                    $(div).addClass('col-12 col-md-4 col-lg-3')
                else
                    $(div).addClass('col');


                if (options.type === 'image'){
                    let img = document.createElement('img');
                    $(img).addClass('w-100')
                        .css({'aspect-ratio': '1',
                            'object-fit' : 'contain',
                            'object-position' : 'center',
                            'border-radius' : '15px',
                            'border'    : '1px solid gray'
                        });
                    img.setAttribute('src', item.url);

                    $(div).append(img);
                }else {
                    let icon = document.createElement('i');
                    let divInner    = document.createElement('div');

                    $(divInner)
                        .addClass('w-100 ' +
                            'p-3 w-100 d-flex justify-content-center align-items-center')
                        .css({
                            'aspect-ratio': '1',
                            'border'    : '1px solid gray',
                            'border-radius' : '15px',
                        });
                    $(icon).addClass('bi bi-file-earmark-check').css({'font-size' : '50px'});
                    $(divInner).append(icon);
                    $(div).append(divInner);
                }

                target_preview.appendChild(div);
            });

            // trigger change event
            target_preview.dispatchEvent(new Event('change'));
        };
    });
};

lfm('lfm', {type: 'image'});

