const express = require("express");
const fs = require("fs");
const path = require('path');
const router = express.Router();
const Note = require('../model/noteModel')

router.get("/", async (req, res) => {
  res.set('Content-Type', 'application/json');
  try {
    notesJson= await Note.all;
    res.send(notesJson);
  } catch (err) {
    console.log(err)
    res.send([]);
  }
});

router.get("/loggedout", (req, res) =>{
  res.render("login.ejs")
})

//request only one note, and their comments
router.get("/:id", (req, res) => {
  res.set('Content-Type', 'application/json');
  try {
    notesJson = fs.readFileSync(path.resolve(__dirname, "../data/notesData.json"), "utf-8");
		let notesData = JSON.parse(notesJson);
		notesData = notesData.find(e => e.id == req.params.id);
		notesJson = JSON.stringify(notesData, null, 2);
    res.send(notesJson);
  } catch (err) {
    res.send([]);
  }
});

module.exports = router;
