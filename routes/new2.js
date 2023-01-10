const Note = require('../model/noteModel')

async function newNote(req, res,editing=false) {


  let id= 0;
  let notes= await Note.all;
  console.log(notes)
  if (!editing) {
    let i = 0;
      while (notes.some(e => e.id == i)) {
        i++;
      }
    id= i;
  } else {
    id= parseInt(req.body.id);
  }
  
  try {
      console.log(req.body, {...req.body,id});
      let noteData={...req.body, id}
      let note= Note.create(noteData);
      console.log(note)
      res.redirect("/");
  }
  catch (err){
      res.json('error')
  }
}



module.exports = { newNote};
