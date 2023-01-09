const express = require ("express");
const app = express();

app.use(express.json());

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose.connect("",{useNewUrlParser: true})
.then(()=> console.log("MongoDB is connected")) 
.catch(err => console.log(err));

const route = require('./routes/route');
app.use('/',route);

app.listen(process.env.PORT||3000, function(){
    console.log("app is running on" + (process.env.PORT || 3000))
});