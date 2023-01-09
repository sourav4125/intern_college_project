const CollegeModel=require("../models/collegemodel")
const mongoose=require("mongoose")


const createcollege=async function(req,res){
    try{ 
        let data=req.body
    const {name,fullname,logolink}=data
  
    if (!(name && fullname && logolink)) { 
        res.status(400).send({ status: false, msg: "All Fields are Mandatory." })
     }
    
    let savedata=await CollegeModel.create(data)

    res.status(201).send({status:true,data:savedata})
}catch(error){
    res.status(500).send({error:error.message})

}
}

const getCollege= async function(req, res){
    try{
    let data = req.query.collegeName
    if(!data) return res.status(400).send({status:false,msg:"Please enter college name"})
    const collegeDetails= await collegemodel.findOne({name:data})
    if(!collegeDetails) return res.status(404).send({status:false,msg:"college not found"})
    const intern=await InternModel.findById({_id:collegeDetails._id})
    if(!intern) return res.status(404).send({status:false,msg:"No intern found"})
    res.status(200).send({status:true,data:intern})
}catch(error){
    res.status(500).send({status:false,msg:error.messege})
}
}


module.exports.getCollege=getCollege

module.exports.createcollege=createcollege