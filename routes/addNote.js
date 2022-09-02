const express = require("express");
const router = express.Router();

const noteMod = require("./../models/noteMod");

router.get("/", (req, res) => {
  res.render("addNote");
});

router.post("/save", async (req, res) => {
  try {
    let date = req.body.date;
    let dN = date.slice(0, 10);
    let newNote = new noteMod({
      title: req.body.title,
      desc: req.body.desc,
      date: dN,
    });
    await newNote.save();
    let notes = await noteMod.find();
    res.render("home", { notes });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
