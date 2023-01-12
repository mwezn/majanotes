const { init } = require ('../db_config/dbconfig.js')
class Note {
	constructor(data) {
		this.id = data.id;
		this.title = data.title;
		this.note = data.note;
		this.color = data.color;
		this.formColor = data.formColor;
		this.author=data.author||data.username;
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

 static create(data){
	return new Promise (async (res, rej) => {
	   try {
		  const db = await init();
		  console.log("Creating new note")
		  let newnote= await db.collection('notes').insertOne({...data})
		  let newNote = new Note(newnote);
		  console.log("This note has been created")
		  res(newNote)

	   } catch (err) {
		  rej(`Error creating note: ${err}`);
	   }
	})
 }
 static delete(id){
	return new Promise(async (res, rej) => {
	   try {
			 const db = await init()
			 const usersData = await db.collection('notes').deleteOne({"id": id})
			 //const users = usersData.map(user => new Habit({...user}))
			 console.log(usersData)
			 res(usersData)
	   } catch (err) {
			 rej(`Error deleting habit for user: ${err}`)
	   }
	})
 }

}



module.exports = Note;
