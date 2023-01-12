const express = require("express");
const fs = require("fs");
const path = require('path');
const router = express.Router();
const Note= require('../model/noteModel')

router
  .route("/:id")
  .get((req, res) => {
      try{
          let note=Note.delete(parseInt(req.params.id));
          console.log(note,req.params.id)
          res.redirect('/')
      }
      catch(err){
          console.log(err)
          res.json(err)
      }
    
  });

module.exports = router;
