const { init } = require ('../db_config/dbconfig.js')
class Note {
	constructor(data) {
		this.id = data.id;
		this.title = data.title;
		this.note = data.note;
		this.color = data.color;
		this.formColor = data.formColor;
		this.author=data.author;
		this.gif=data.gif;
		this.heart=data.heart;
		this.thumbs=data.thumbs;
		this.neutral=data.neutral;
		this.comments=data.comments;
	}



static get all(){
	return new Promise(async (res, rej) => {
	   try {
			 const db = await init()
			 const notesData = await db.collection('notes').find().toArray()
			 const notes = notesData.map(note => new Note({...note}))
			 res(notes);
	   } catch (err) {
			 rej(`Error retrieving users: ${err}`)
	   }
	})
 }

 static create(data) {
	return new Promise (async (res, rej) => {
	   try {
		  const db = await init();
		  console.log("Creating new note")
		  let newnote= await db.collection('notes').insertOne({
			 id: data.id, 
			 title: data.title, 
			 note: data.note,
			 color:data.color,
			 formColor: data.formColor
		  })
		  // let newUser = new User(user.ops[0]);
		  console.log("This note has been created")
		  console.log(newnote)
		  res(`user created succesfully`)

	   } catch (err) {
		  rej(`Error creating user: ${err}`);
	   }
	})
 }

}



module.exports = Note;
