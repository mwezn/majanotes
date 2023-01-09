const express = require("express");
const fs = require("fs");
const path = require('path');
const router = express.Router();

const newNotePost=require("./new2");

router
  .route("/")
  .post((req, res) => { newNotePost.newNote(req, res) });

module.exports = router;
