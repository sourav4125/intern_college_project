const express = require ("express");
const app = express();

app.use(express.json());

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://Soumyaranjan:utnipsom@soumya-db.3rzvirb.mongodb.net/group4Database",{useNewUrlParser: true})
.then(()=> console.log("MongoDB is connected")) 
.catch(err => console.log(err));

const route = require('./routes/route');
app.use('/',route);

app.listen(3000, function(){
    console.log("app is running on" + 3000)
});