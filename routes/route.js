const express = require("express");
const router = express.Router();
const interController = require("../controller/interncontroller");
const collegecontrollr=require("../Controller/CollegeControle")

router.post("/functionup/interns", interController.new_intern);

router.post("/functionup/colleges",collegecontrollr.createcollege)

router.get("/functionup/collegeDetails",collegecontrollr.getCollege)

module.exports = router;
