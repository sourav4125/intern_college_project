const InternModel = require("../models/InternModel");
const collegemodel = require("../models/collegemodel");
const {validName,validMail,validNumber}=require("../validator/validation")


const new_intern = async function (req, res) {
  try {
    let data = req.body;
    if(!data) return res.status(400).send({status:false,msg:"Invalid request"})
    if (!data.name) {
      res.status(400).send({ status: false, msg: "Name is missing" });
    }
    if(!validName(data.name)) return res.status(400).send({status:false,msg:"Enter valid name"});
    const  internByName = await InternModel.findOne({name:data.name})
    if(internByName) return res.status(400).send({status:false,msg:"Intern name already exist"})


    if (!data.email) {
      return res.status(400).send({ status: false, msg: "Email is missing" });
    }
    if(!validMail(data.email)) return res.status(400).send({status:false,msg:"Enter a valid email"})
    const internByEmail = await InternModel.findOne({email: data.email});
    if (internByEmail) return res.status(400).send({status: false, msg: 'email already in use, please enter a unique email'});

    if (!data.mobile) {
      return res.status(400).send({ status: false, msg: "Mobile number is missing" });
    }
    if(!validNumber(data.mobile)) return res.status(400).send({status:false,msg:"Enter valid mobile number"})
    const internByMobile = await InternModel.findOne({mobile: data.mobile});
    if (internByMobile) return res.status(400).send({status: false, msg: 'mobile number already in use, please enter a unique mobile number'});

    if(!data.collegeName) {
     return res.status(400).send({status:false,msg:"Enter college name"})
    }
    const internData= await collegemodel.findOne({name:data.collegeName})
    if (!internData) return res.status(404).send({status: false, msg: 'collge does not exits with this name'});
    const collegeId= internData._id
    const {name,email,mobile,isDeleted} = data
    const Intern = {name,email,mobile,isDeleted,collegeId} 
    let CreateIntern = await InternModel.create(Intern)
    return res
      .status(201)
      .send({ status: true, data: CreateIntern});
  } catch (error) {
    res
      .status(500)
      .send({ status: false, msg: error.message });
  }
};


module.exports.new_intern = new_intern;