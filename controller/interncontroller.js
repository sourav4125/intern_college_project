const InternModel = require("../models/InternModel");
const mongoose = require("mongoose");
const collegemodel = require("../models/collegemodel");
const {validName,validMail,validNumber}=require("../validator/validation")


const new_intern = async function (req, res) {
  try {
    let data = req.body;

    if (!data.name) {
      res.status(400).send({ status: false, msg: "Name is missing" });
    }
    if(!validName(data.name)) return res.status(400).send({status:false,msg:"Enter valid name"});


    if (!data.email) {
      res.status(400).send({ status: false, msg: "Email is missing" });
    }
    if(!validMail(data.email)) return res.status(400).send({status:false,msg:"Enter a valid email"})


    if (!data.mobile) {
      res.status(400).send({ status: false, msg: "Mobile number is missing" });
    }
    if(!validNumber(data.mobile)) return res.status(400).send({status:false,msg:"Enter valid mobile number"})
    
    if(!data.collegeName) {
      res.status(400).send({status:false,msg:"Enter college name"})
    }
    const internData= await collegemodel.findOne({name:data.collegeName})
    const collegeId= internData._id
    const {name,email,mobile,isDeleted} = data
    const Intern = {name,email,mobile,isDeleted,collegeId} 
    let CreateIntern = await InternModel.create(Intern)//
    res
      .status(201)
      .send({ status: true, data: CreateIntern});
  } catch (error) {
    res
      .status(500)
      .send({ status: false, msg: error.message });
  }
};
module.exports.new_intern = new_intern;
