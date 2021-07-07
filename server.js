//Dependencies
const express = require('express');
const path = require('path');
const fs = require('fs');
const util = require('util');

//Uses Express and sets up the port
const app = express();
var PORT = process.env.PORT || 3000;
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//HTML Routes to notes and main page
app.get('/',(req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));



//Reads db.json notes
app.get("/api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/db/db.json"));
});

// Creates new note, adds to db.json, returns new note
app.post("/api/notes", (req, res) => {
    let newNote = req.body;
    let noteList = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    let notelength = (noteList.length).toString();
    newNote.id = notelength;
    noteList.push(newNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(noteList));
    res.json(noteList);
})


//Deletes note
app.delete("/api/notes/:id", (req, res) => {
    let noteList = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    let noteId = (req.params.id).toString();
    noteList = noteList.filter(selected =>{
        return selected.id != noteId;
    })
    fs.writeFileSync("./db/db.json", JSON.stringify(noteList));
    res.json(noteList);
});




app.listen(PORT, () => console.log(`app listening on PORT ${PORT}`));