const express = require("express");
const router = express.Router();
const interController = require("../controller/interncontroller");
const collegeControllr = require("../Controller/CollegeControle");

router.post("/functionup/interns", interController.new_intern);
router.post("/functionup/colleges", collegeControllr.createcollege);
router.get("/functionup/collegeDetails", collegeControllr.getCollege);

router.all('/*', function (req, res) {
    res.status(404).send({status: false, msg: 'page not found'});
});

module.exports = router;
