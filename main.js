function totalProducts(){
    $.ajax({
        url: "http://localhost:9000/products/",
        type: "GET",
        dataType: "json"
    }).done(function (data) {
        printing(data);
    });
   
}
function categories(categoryID){
    $.ajax({
        url: "http://localhost:9000/products/"+categoryID,
        type: "GET",
        dataType: "json"
    }).done(function (data) {
         
       
        
        printing(data);
    });
   
}







                    


 



    function printing(testdata) {
        $('.container').hide();
        $('#warehouseList').show();
        var table = $('#warehouseList');
//        table.style.display = 'none';
            

        $(table).dataTable({
            "aaData": testdata,
            "destroy": true,
            "aoColumns": [
                {
                    "mDataProp": "productID"
                },
                {
                    "mDataProp": "productName"
                },
                {
                    "mDataProp": "wareHouseCode"
                },
                {
                    "mDataProp": "supplierName"
                },
                {
                    "mDataProp": "categoryName"
                },
                {
                    "mDataProp": "descripition"
                },
                {
                    "mDataProp": "costPrice"
                },
                {
                    "mDataProp": "sellingprice"
                },
                {
                    "mDataProp": "quantity"
                }


    ]

        });
    }



//function addToWareHouseTable(data) {
//
//    var table = $("#warehouseList");
//
//    for (var i in data) {
//        var obj = data[i];
//        var tr = $("<tr>");
//        $.each(obj, function (e) {
//            var td = $("<td>").html(obj[e]);
//            $(tr).append(td);
//
//
//        });
//
//        //            console.log(tr);
//        $(table).append(tr);
//        //            console.log(table);
//
//    }
//}
