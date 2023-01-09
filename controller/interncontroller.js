const InternModel = require("../models/InternModel");
const mongoose = require("mongoose");
const { isValidObjectId } = require('mongoose');
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
    
    if(!isValidObjectId(data.collegeId)) return res.status(400).send({status:false,msg:"Enter valid college id"})

    let id=await collegemodel.findById(data.collegeId)
    if(!id) return res.status(400).send({status: false,msg:"CollegeId doesn't exits"})

    let CreateIntern = await InternModel.create(data);
    res
      .status(201)
      .send({ status: true, data: CreateIntern });
  } catch (error) {
    res
      .status(500)
      .send({ status: false, msg: error.message });
  }
};
module.exports.new_intern = new_intern;
