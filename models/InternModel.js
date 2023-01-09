const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const InternModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,

      required: true,
      unique: true,
    },
    mobile: {
      type: Number,
      required: true,
      unique: true,
    },
    collegeId: {
      type: ObjectId,
      ref: "CollegeData",
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("InternData", InternModel);
