const mongoose = require("mongoose");

const myForm = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please enter the name"],
    },
    email: {
      type: String,
      required: [true, "please enter the email"],
    },
    msg: {
      type: String,
      required: [true, "please enter your message"],
    },
  },
  {
    timestamps: true,
  }
);

const myPartner = mongoose.Schema(
  {
    mail: {
      type: String,
      required: [true, "please enter the email"],
    }
  },
  {
    timestamps: true,
  }
);

const formDB = mongoose.model("CONTACT", myForm);
const partnerDB = mongoose.model("PARTNER", myPartner);
module.exports = {
  formDB,
  partnerDB
};
