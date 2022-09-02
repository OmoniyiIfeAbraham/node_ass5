const express = require("express");
const router = express.Router();

const noteMod = require("./../models/noteMod");

router.get("/", (req, res) => {
  res.redirect("/findall");
});

router.get("/findall", async (req, res) => {
  let notes = await noteMod.find();
  res.render("home", { notes });
});

module.exports = router;
