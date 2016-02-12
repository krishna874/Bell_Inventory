var mssql= require('mssql');

var express= require("express");

var app = express();


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/wareHouse_table',function(req,res){
          
mssql.connect("mssql://belluser:rammalle@localhost/bell_inventory").then(function(){
    //query
    new mssql.Request().query("select * from  wareHouse_table ").then(function(recordset){
            
    res.end(JSON.stringify(recordset));
        console.log(recordset);
    
   }).catch(function(err) {
		console.log(err.message); 
});
    
}).catch(function(err) {
		console.log(err.message); 
    
	});
});

app.listen(10000, function(){
    
    console.log("server running on port 10000");
});
