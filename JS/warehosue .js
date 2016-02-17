window.onload = function(){
    var getTableData = new XMLHttpRequest();

    getTableData.onreadystatechange = function() {
        //checking for when response is received from server
        if(getTableData.readyState === 4 && getTableData.status == 200) {
            var tableInfo     = JSON.parse(getTableData.responseText);
            console.log(getTableData);
               warehouseData(tableInfo); 
        }
    };
    
                
getTableData.open("GET", "http://localhost:10000/wareHouse_table", true);
  getTableData.send();
 }

function warehouseData(list){
    
    var newTable = document.getElementById("warehouseList");
            
    for (var i in list){
        var obj = list[i];
      // var courseid = list[i]["courseid"];
        var tr = document.createElement("tr");
    
        for(var j in obj){
            var subobj = obj[j];
            var td = document.createElement("td");
            
           //if (i==="name") {
                             
            //td.innerHTML=  '<a href="http://localhost:10000/courses/">'+obj[j]+'</a>';
                                               
          // };
                                
            td.innerHTML = obj[j];
            tr.appendChild(td);
            
        }
        newTable.appendChild(tr);
    }
};