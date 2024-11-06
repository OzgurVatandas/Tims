$(function(){
    console.log('function js status : ok');
    const token = document.getElementsByName('_token')[0].content;
    let _table = null;
    let baseDatatableUrl = '';
    let dataTablePrevData = [];

    showToast = function(_title = '',_icon = 'success',_timer = 2000,_is_progress_bar = true){
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: _timer,
            timerProgressBar: _is_progress_bar,
        });
        Toast.fire({
            icon: _icon,
            title: _title
        });
    };

    console.log('Show Toast status : ok');

    postAction = function(_data, _url , _afterAction ){

        $.ajax({
            url : _url,
            type : "post",
            async : true,
            data : _data,
            success : function (response){
                if(_afterAction != null)
                    _afterAction(response);
            },
        }).fail(function (jqXHR, textStatus, error){
            console.log(jqXHR.responseText);
            alert('Hata, Sistem yöneticisine başvurun.');
        });
    };

    console.log('Post Action status : ok');

    postActionId = function (_id,_url,_afterAction,_data_type = 11){
        let _data = {
            id : _id,
            data_type : _data_type,
            _token : token };
        $.ajax({
            url : _url,
            type : "post",
            async : true,
            data : _data,
            success : function (response){
                if(_afterAction != null)
                    _afterAction(response);
            },
        }).fail(function (jqXHR, textStatus, error){
            console.log(jqXHR.responseText);
            alert('Hata, Sistem yöneticisine başvurun.');
        });
    };

    console.log('Post Action Id status : ok');


    postActionFormData = function (_data,_url,_afterAction){

        _data.append('_token',document.getElementsByName('_token')[0].content);

        $.ajax({
            type: 'POST',
            url: _url,
            data: _data,
            dataType: 'json',
            contentType: false,
            cache: false,
            processData:false,
            success : function (response){
                if(_afterAction != null)
                    _afterAction(response);
            },
        }).fail(function (jqXHR, textStatus, error){
            let response = {
                success : false,
                data    : jqXHR,
                message : jqXHR.responseJSON.message
            };

            if (_afterAction != null)
                _afterAction(response);
            alert('Hata, Sistem yöneticisine başvurun.');
        });
    }

    console.log('Post Action Form Data : ok');


    postActionDatatableItem = function (_id,_url,_afterAction,_data_type = 11){
        if(_table == null){
            showToast('Datatable Bulunamadı','error');
            return;
        }
        let _data = {
            id : _id,
            data_type : _data_type,
            _token : token };
        $.ajax({
            url : _url,
            type : "post",
            async : true,
            data : _data,
            success : function (response){
                if(_afterAction != null)
                    _afterAction(response);
                _table.ajax.url(baseDatatableUrl).load();
            },
        }).fail(function (jqXHR, textStatus, error){
            console.log(jqXHR.responseText);
            alert('Hata, Sistem yöneticisine başvurun.');
        });
    }

    createDatatable = function (_tableId,_baseUrl = '',_queryString = '', _columns = [],_pageLength = 10,_sortUrl = ''){

        let tableId = "#" + _tableId;
        baseDatatableUrl = _baseUrl;
        _table = $(tableId).DataTable({
            "language": {
                "decimal":        "",
                "emptyTable":     "Tabloda veri bulunmuyor",
                "info":           "_START_ / _END_ / Toplam Kayıt : _TOTAL_ ",
                "infoEmpty":      "Toplam veri sayısı : 0",
                "infoFiltered":   "(Toplam _MAX_ kayıt arasından filtrelendi.)",
                "infoPostFix":    "",
                "thousands":      ",",
                "lengthMenu":     "Sütun sayısı  _MENU_ ",
                "loadingRecords": "Yükleniyor...",
                "processing":     "Yükleniyor...",
                "search":         "Arama:",
                "zeroRecords":    "Eşleyen kayıt bulunamadı.",
                "paginate": {
                    "first":      "İlk",
                    "last":       "Son",
                    "next":       "Sonraki",
                    "previous":   "Önceki"
                },
                "aria": {
                    "sortAscending":  ": activate to sort column ascending",
                    "sortDescending": ": activate to sort column descending"
                }
            },
            processing: true,
            serverSide : true,
            lengthChange : false,         //Sayfa sayısı değiştirme
            pageLength : _pageLength,     //Data Row sayısı
            ajax: _baseUrl + _queryString,
            columns : _columns,
            searching : false,
            rowReorder: true,
        });

        if (_sortUrl !== ''){
            _table.on('row-reorder', function(e, diff, edit) {
                let orderData = [];
                let allRows = _table.rows().data().toArray();  // Tüm satırları al

                diff.forEach(function(change) {
                    let oldPosition = parseInt(change.oldPosition);
                    let newPosition = parseInt(change.newPosition);

                    // Eski pozisyondaki ve yeni pozisyondaki 'order' değerlerini al
                    let rowData = _table.row(change.node).data();
                    let oldOrder = rowData.order;
                    let newOrder = allRows[newPosition].order;

                    // Değişiklik yap: Sadece yer değiştirme işlemi
                    orderData.push({
                        id: rowData.id,
                        old_order: oldOrder,
                        new_order: newOrder
                    });
                });

                if (orderData.length == 0)
                    return;

                showToast('Lütfen bekleyin...','info',5000);

                let data = {
                    order_data : orderData,
                    post_type: 191,
                    _token: token
                }

                postAction(data,_sortUrl,(response) => {
                    if (response.success){
                        showToast(response.message,'success',2000);
                    }else{
                        showToast(response.message,'error',2000);
                    }
                })
            });
        }

        return _table;
    };



    makeTableSortable = function (_sortableRowId,_sortingUpdateUrl,createTableAction){
        let sortableRowId = "#" + _sortableRowId;
        let eachRowId = sortableRowId + " tr";
        let baseTable = null;

        if(createTableAction != null){
            createTableAction();
        }

        $(sortableRowId).sortable({
            stop: function(event, ui) {
                let currentList = Array();
                $(eachRowId).each(function(i, v){
                    currentList[i] = {
                        data_order_id       : $(this).attr('data-order-id'),
                        data_new_order_id   : $(this).index()+1,
                        //data_new_order_id : $(this).index()+1 + (10 * (baseTable.page.info().page)),
                        data_id             : $(this).attr('data-id'),
                        data_title          : $(this).attr('data-title')
                    };
                });

                console.log(currentList);

                let sortingData = {
                    order_list  : currentList,
                    prev_list   : dataTablePrevData,
                    data_type   : 111,
                    _token      : token};

                postAction(sortingData,_sortingUpdateUrl,function (result){
                    if(result.success){
                        showToast(result.message);
                        _table.ajax.url(baseDatatableUrl).load();
                    }
                    else{ showToast(result.message,'error'); console.log(result.message) }
                });
            }
        });
    };
})
