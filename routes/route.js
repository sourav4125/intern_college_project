const express = require("express");
const router = express.Router();
const interController = require("../controller/interncontroller");
const collegeControllr = require("../Controller/CollegeControle");

router.post("/functionup/interns", interController.new_intern);
router.post("/functionup/colleges", collegeControllr.createcollege);
router.get("/functionup/collegeDetails", collegeControllr.getCollege);

module.exports = router;
