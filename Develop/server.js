//Dependencies

const express = require('express');
const path = require('path');
const fs = require('fs');

//Uses Express and sets up the port

const app = express();
var PORT = process.env.PORT || 3000;
app.use(express.static('public'));

//HTML Routes

app.get('/',(req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));

//API Routes
// GET /api/notes should read the db.json file and return all saved notes as JSON.
// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

app.get('/api/notes', (req,res) =>{
    fs.readFile('./db/db.json', function (err, data) {
        if (err) {
            throw err;
        }
        const content = JSON.parse(data);
        console.log(content);   // Put all of the code here (not the best solution)
        processFile(content, res);   // Or put the next step in a function and invoke it
    });
    
    function processFile(content, res) {
        res.json(content);
        console.log(content);
    }
});

app.post('/api/notes', (req, res) => {
    let content = [];
    // fs.readFile('./db/db.json', function (err, data) {
    //     if (err) {
    //         throw err;
    //     }
    //     content = JSON.parse(data);
    //     console.log(content);
    // });

    const newNote = req.body;
    content.push(newNote);

    fs.writeFile('/api/notes',content, function (err) {
        if (err) return console.log(err);
      });
      res.json(content);
});

fs.readFile('./db/db.json', function (err, data) {
    if (err) {
        throw err;
    }
    content = JSON.parse(data);
    console.log(content);
});


app.listen(PORT, () => console.log(`app listening on PORT ${PORT}`));