const CollegeModel=require("../models/collegemodel")
const mongoose=require("mongoose")
const InternModel=require("../models/InternModel")
const collegemodel = require("../models/collegemodel")
// const validName = (name) => /^[a-zA-Z_]{3,100}$/.test(name);
const {validName}= require("../validator/validation")



const createcollege=async function(req,res){
    try{ 
        let data=req.body
    const {name,fullName,logoLink}=data
  
    if (!(name && fullName && logoLink)) { 
        res.status(400).send({ status: false, msg: "All Fields are Mandatory." })
     }
    if(!validName(name)) return res.status(400).send({status:false,msg:"Enter valid name"});
    if(!validName(fullName.trim().length==0)) return res.status(400).send({status:false,msg:"Enter valid fullName"})
    
    let savedata=await CollegeModel.create(data)

    res.status(201).send({status:true,data:savedata})
}catch(error){
    res.status(500).send({error:error.message})

}
}



const getCollege = async function (req, res) {
    try {
        const data = req.query;
        if (!data.collegeName) return res.status(400).send({msg: 'please enter college name'});
        if (!validName(data.collegeName)) return res.status(400).send({status: false, msg: 'please enter a valid college name'});
        const college = await CollegeModel.findOne({name: data.collegeName});
        if (!college) return res.status(400).send({status: false, msg: 'college with this name does not exits'});

        const interns = await InternModel.find({collegeId: college._id}).select({name: 1, email: 1, mobile: 1});
        
        if (interns.length == 0) return res.status(400).send({status: false, msg: 'no intern found in this college'});

        const {name, fullName, logoLink} = college;
        
        const result = {name , fullName, logoLink, interns};
        res.status(200).send({status: true, data: result})
    } catch (error) {
        res.status(500).send({status: false, msg: error.message});
    };
};




module.exports.getCollege=getCollege
module.exports.createcollege=createcollege