const mongoose = require("mongoose");

const schema = mongoose.Schema;

noteSchema = new schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("noteMod", noteSchema);
