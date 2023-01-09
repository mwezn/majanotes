const Note = require('../model/noteModel')

function newNote(req, res) {
   
  try {
      console.log(req.body.title,req.body.note,req.body.color)
      let note= Note.create(req.body.title, req.body.note, req.body.color)
      //res.json(note)
      res.redirect("/");
  }
  catch (err){
      res.json('error')
  }
}



module.exports = { newNote};
