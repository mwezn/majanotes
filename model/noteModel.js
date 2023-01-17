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
		this.comments=data.comments||[];
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

 static getById(id){
  return new Promise(async (res, rej) =>{

	try {
		const db = await init();
		console.log("getting note by id")
		let note= await db.collection('notes').find({"id": id}).toArray();
		let newNote = new Note(note[0]);
		console.log(note,newNote)
		res(newNote)

	 } catch (err) {
		rej(`Error fetching note with id ${id}: ${err}`);
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
 static update(id,data){
	return new Promise(async (res, rej) => {
	   try {
		  const db = await init()
		  const habitToUpdate = await this.getById(id)
		  let dataToUpdate = {"comments": [...habitToUpdate.comments,data]}
		  console.log(dataToUpdate)
		
		  const usersData = await db.collection('notes').updateOne(
			 { "id": id },{ $set: dataToUpdate}
		  )  
		  res(usersData)
	   } catch (err) {
			 rej(`Error updating note for user: ${err}`)
	   }
	})

  }
  static updateEmoji(id,data){
	return new Promise(async (res, rej) => {
	   try {
		  const db = await init()
		  const noteToUpdate = await this.getById(id)
		  let note=noteToUpdate[data];
		  let count=note+=1;
		  let emojiUpdate=data=="heart"?{"heart": count}:data=="thumbs"?{"thumbs":count}:{"neutral":count};
		  console.log(emojiUpdate)
		  const usersData = await db.collection('notes').updateOne(
			 { "id": id },{ $set: emojiUpdate}
		  )  
		  res(usersData)
	   } catch (err) {
			 rej(`Error updating note for user: ${err}`)
	   }
	})

  }

}



module.exports = Note;
