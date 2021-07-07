# Note Taker

[Application Deployed via Heroku](https://notetaker0000.herokuapp.com/)

This application is a simple note taker. It allows the user to take and store notes, as well as delete existing notes.
The application saves and retrieves note data from a JSON file.

<img src= "https://github.com/Hannybiggs/noteTaker/blob/main/Assets/ScreenshotNoteTaker.png">

## Features:
- Add new note with title and body
- Save new note with title and body
- Delete note

## Functionalities:
- db.json file on the back end that stores and retrieves notes using fs module
- HTML routes that return notes.html file and index.html file
- API route that reads the db.json file and return notes
- API route that Receives a new note, saves it on the request body, adds it ot the db.json file, and reutnrs the new note

## Process Notes
The files had to be adjusted slightly in the end so that it would deploy correctly on Heroku. The live URL can be accessed via the link at the top of the page.