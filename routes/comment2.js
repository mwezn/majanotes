const express = require("express");
const fs = require("fs");
const path = require('path');
const router = express.Router();
const Note = require('../model/noteModel')

const constants = require(path.resolve(__dirname, "constants"));

router
  .route("/:id")
  .get((req, res) => {
	res.render("comment");
  })
  .post(async (req, res) => {
    try {
        let data;
        console.log(req.body.comment)
        if (req.body.username) {
            data={"comment": req.body.comment, "author": req.body.username};
          } 
        else {
            data={"comment": req.body.comment, "author": 'anonymous'};
        }
        let editComment= await Note.update(parseInt(req.params.id),data);
        res.send(editComment)
    }
    catch(err){
        console.log(err)
        res.send(err)

    }
  });

function checkValidComment(req, res) {
  let passed = true;
  //test for comment being too long
  if (req.body.comment.length > constants.maxNoteChars) {
    passed = false;
  }
  //test for no comment
  if (req.body.comment.length === 0) {
    passed = false;
  }
  if (!passed) {
    res.redirect(req.originalUrl);
  }
  return passed;
}

module.exports = router;
