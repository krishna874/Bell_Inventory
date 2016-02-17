var sql = require('mssql');
var express = require('express');
var cors = require('cors'),
    bodyParser = require('body-parser'),
    app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static("../")); 
app.get('/',function(){
   
});

app.use(cors());


app.get('/products', function (req, res) {
            sql.connect('mssql://belluser:venkat@localhost/bell_inventory').then(function () {
                   
                    new sql.Request().query('select A.productID,A.productName,B.wareHouseCode,C.supplierName,D.categoryName,descripition,costPrice,sellingprice,quantity from product_table as A left join wareHouse_table as B on A.wareHouseID = B.wareHouseID left join supplier_table as C on A.supplierID = C.supplierID left join categoryLookUp_table as D on A.categoryID = D.categoryID').
                        then(function (recordset) {
                            res.send(recordset);
                            
                        }).catch(function (err) {
                            console.log(`error in query ${err.message}`);

                        });

                    }).catch(function (err) {
                    console.log(`error connection ${err.message} `);
                });


            });

        app.get('/products/:categoryID', function (req, res) {
            sql.connect('mssql://belluser:venkat@localhost/bell_inventory').then(function () {
                    
                    new sql.Request().query('select A.productID,A.productName,B.wareHouseCode,C.supplierName,D.categoryName,descripition,costPrice,sellingprice,quantity from product_table as A left join wareHouse_table as B on A.wareHouseID = B.wareHouseID left join supplier_table as C on A.supplierID = C.supplierID left join categoryLookUp_table as D on A.categoryID = D.categoryID where D.categoryID = '+req.params.categoryID).
                        then(function (recordset) {
                            res.send(recordset);
                            
                        }).catch(function (err) {
                            console.log(`error in query ${err.message}`);

                        });

                    }).catch(function (err) {
                    console.log(`error connection ${err.message} `);
                });


            });


        app.listen(9000, function () {
            console.log("server is running at port 9000");
        });
