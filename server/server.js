import express from 'express';
import bodyParser from 'body-parser';
import mysql from 'mysql';


const app=express();

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"restaurant"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    // con.query("CREATE DATABASE restaurant", function (err, result) {
    //     if (err) throw err;
    //     console.log("Database created");
    //   });
    // var sql = "CREATE TABLE restaurant (id int,name VARCHAR(255),email VARCHAR(255),password VARCHAR(255),phoneNumber VARCHAR(255),address VARCHAR(255),status tinyint)";
    // con.query(sql, function (err, result) {
    //   if (err) throw err;    
    //   console.log("Table created");
    // });

  });

app.get('/', function(req, res){
    res.send('hello world');
});
app.listen(4000,()=>console.log('Server listening at 4000'));