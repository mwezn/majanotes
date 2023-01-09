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

 static create(title,note, color) {
	return new Promise (async (res, rej) => {
	   try {
		  const db = await init();
		  console.log("Creating new note")
		  let newnote= await db.collection('notes').insertOne({title,note,color})
		  let newNote = new Note(newnote);
		  console.log("This note has been created")
		  res(newNote)

	   } catch (err) {
		  rej(`Error creating note: ${err}`);
	   }
	})
 }

 static create2(name, age, country, fights, wins){
	return new Promise (async (resolve, reject) => {
		try {
			const db = await init();
			let fightData = await db.collection('dogs').insertOne({ name, age, country, fights,wins})
			let fighter = new Fighter(fightData.ops[0]);
			resolve (fighter);
		} catch (err) {
			reject('Error creating fighter');
		}
	});
}

}



module.exports = Note;
