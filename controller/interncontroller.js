const InternModel = require("../models/InternModel");
const mongoose = require("mongoose");
// const validMail = (mail) =>
//     /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail); 
// const validName = (name) => /^[a-zA-Z_]{3,20}$/.test(name);
// const validNumber = (number) => /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/ .test(number);
const { isValidObjectId } = require('mongoose')


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

    let CreateIntern = await InternModel.create(data);
    res
      .status(201)
      .send({ status: true, msg: "Intern Created", data: CreateIntern });
  } catch (error) {
    res
      .status(500)
      .send({ status: false, msg: "Error Creating", data: error.message });
  }
};
module.exports.new_intern = new_intern;
