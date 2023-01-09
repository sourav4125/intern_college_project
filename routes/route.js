const express = require("express");
const router = express.Router();
const interController = require("../controller/interncontroller");

router.post("/functionup/interns", interController.new_intern);

module.exports = router;
