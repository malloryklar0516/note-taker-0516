const fs= require("fs");
// import path package
const path = require('path');
//import uniqid package
var uniqid = require('uniqid')
// api route 
module.exports= (app)=> {
    app.get('/api/notes', (req, res) =>{
        res.sendFile(path.join(__dirname, '../db/db.json'))
        });
        
        app.post('/api/notes', (req,res) => {
            let db = fs.readFileSync('db/db.json');
            db = JSON.parse(db);
            res.json(db);
            let myNote = {
                title: req.body.title,
                text: req.body.text,
                id: uniqid(),
            };
            db.push(myNote);
            fs.writeFileSync('db/db.json', JSON.stringify(db));
            res.json(db);
        
        });
        
        app.delete('/api/notes/:id', (req, res)=> {
            let db = JSON.parse(fs.readFileSync('db/db.json'));
            let deleteItem = db.filter(item => item.id !== req.params.id);
            fs.writeFileSync('db/db.json', JSON.stringify(deleteItem));
            res.json(deleteItem);
        })
    };