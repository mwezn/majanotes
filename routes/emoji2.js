const express = require("express");
const router = express.Router();
const Note = require('../model/noteModel')

router
  .route("/")
  .post((req, res) => {
    console.log("\nReceived emoji post request:")
    console.log(req.body)
    let emojisUpdate=req.body.emoji;
    try {
        let noteToEdit= Note.updateEmoji(parseInt(req.body.id),emojisUpdate)
        res.send(noteToEdit)
    }
    catch(err){
        console.log(err)
        res.send(err)
    }
    
  })

	module.exports = router;
