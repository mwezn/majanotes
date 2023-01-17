const express = require("express");
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

router.get("/:id", async (req, res) => {
  res.set('Content-Type', 'application/json');
  try {
    note = await Note.getById(parseInt(req.params.id));
	  res.json(note);
  } catch (err) {
    console.log(err)
    res.send(err);
  }
});



module.exports = router;
