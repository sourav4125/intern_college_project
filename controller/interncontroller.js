const InternModel = require("../models/InternModel");
const mongoose = require("mongoose");

const new_intern = async function (req, res) {
  try {
    let data = req.body;

    if (!data.name) {
      res.status(400).send({ status: false, msg: "Name is missing" });
    }
    if (!data.email) {
      res.status(400).send({ status: false, msg: "Email is missing" });
    }
    if (!data.mobile) {
      res.status(400).send({ status: false, msg: "Mobile number is missing" });
    }

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
