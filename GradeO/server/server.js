const express= require('express');
const app=express();
const MongoClient = require("mongodb").MongoClient;

//DB connection
const url='mongodb://localhost:27017/';
var dbo;
var db;
MongoClient.connect(url,function(err,db){
    if (err) throw err;
    console.log("Database Connected!");
    dbo = db.db("project");
});
// var username ;
app.get('/logincheck',(req,res)=>{
	var a = req.query["username"];
    username=a;

    var b = req.query["password"];
    console.log(a)
    console.log(b)
    res.setHeader("Access-Control-Allow-Origin","*");
    //sql var q="select password from user where username='"+a+"';";
    var q={username: a, password: b};
    dbo.collection("user").findOne(q, (err, result)=> {
        if (err) throw err;
        if(!result){
            console.log("Login unsuccessful");
            res.json({message: false});
            return;
        }
        else
            console.log("Login successful");
            res.json({message: true, username: a});

            return;

    });
    
});

// app.get('/getaccounts',(req,res) =>{
//     res.setHeader("Access-Control-Allow-Origin","*");
//     console.log("get all users");
//     dbo.collection("user").find({}).toArray((err, result)=> {
//         if(err) throw err
//         var nrows=result.length;
//         var jsondata=[];
//         for(var i=0;i<nrows;i++){
//             row=result[i];
//             console.log(row);
//             jsondata.push(row);
//         } 
//         res.json({jsondata});   
//     });
// });
app.get('/display',(req,res) =>{
    res.setHeader("Access-Control-Allow-Origin","*");
    console.log("get all details");
    dbo.collection("stud").find({}).toArray((err, result)=> {
        if(err) throw err
        var nrows=result.length;
        var jsondata=[];
        for(var i=0;i<nrows;i++){
            row=result[i];
            console.log(row);
            jsondata.push(row);
        } 
        res.json({jsondata});   
    });
});
app.get('/insertUSer',(req,res)=>{
    var a = req.query["username"];
    var b = req.query["password"];
    res.setHeader("Access-Control-Allow-Origin","*");
    //sql var q="select password from user where username='"+a+"';";
    var q={username: a, password: b};
    dbo.collection("user").insertOne(q,(err,result)=>{
        if(err) throw err;
        console.log("data inserted");
        res.json({message: true}); 
    });
});

app.get('/insertstud',(req,res)=>{
    var a = req.query['rollno'];
    var b= req.query['name'];

    var m1 = req.query['mark1'];

    var m2= req.query['mark2'];

    var m3 = req.query['mark3'];
    var m4 = req.query['mark4'];
    var m5= req.query['mark5'];

    var sum = parseInt(m1)+parseInt(m2)+parseInt(m3)+parseInt(m4)+parseInt(m5);
    var perc =sum/5;
    var grade ="";
    if(perc>=90){
        grade = "O";
    }
    else if(perc<90 && perc>=80){
        grade = "A+";
    }
    else if(perc<80 && perc>=70){
        grade = "A";
    }
    else if(perc<70 && perc>=60){
        grade = "B+";
    }
    else if(perc<60 && perc>=50){
        grade = "B";
    }
    else{
        grade ="FAIL";
    }
    var percen=perc.toString();
    console.log(percen);
    res.setHeader("Access-Control-Allow-Origin","*");
    var q={rollno: a, name: b,mark1: m1,mark2: m2,mark3: m3,mark4: m4,mark5: m5, percentage: percen, g: grade};
    dbo.collection("stud").insertOne(q,(err,result)=>{
        if(err) throw err;
        console.log("data inserted");
        res.json({message: true}); 
    });

})
// app.get('/username',(req,res)=>{
//     res.setHeader("Access-Control-Allow-Origin","*");
//     res.json({username: username});
// });


// app.get('/dashboard',(req,res)=>{
//     res.setHeader("Access-Control-Allow-Origin","*");
// });
// app.get('/tweet',(req,res)=>{
//     res.setHeader("Access-Control-Allow-Origin","*");
//     var a = req.query["username"];
//     var b = req.query["tweet"];
//     var c=new Date();
//     var q={username: a, tweet: b,date: c};
//     dbo.collection("tweets").insertOne(q,(err,result)=>{
//         if(err) throw err;
//         console.log("data inserted");
//         res.json({message: true}); 
//     });
// });
   
// app.get('/sample',(req,res)=>{
//     res.send("Hey! server here from sample");
// });

app.listen(5000);
console.log("Server@5000");