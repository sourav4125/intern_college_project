const collegeSchema=require("../models/collegemodel");
const mongoose=require("mongoose")


const getCollege= async function(req, res){
    try{
    let data = req.query.collegeName
    if(!data) return res.status(400).send({status:false,msg:"Please enter college name"})
    const collegeDetails= await collegemodel.find(data)
    res.status(200).send({status:true,data:collegeDetails})
}catch(error){
    res.status(500).send({status:false,msg:error.messege})
}
}


module.exports.getCollege=getCollege