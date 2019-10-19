const express = require('express')
const fetch = require('node-fetch')
const app = express()
const port = 3000
const cors = require('cors')
const sqlite3 = require('sqlite3').verbose();
const sessionToHandle = {}

let db = new sqlite3.Database('./chinook.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});

app.use(express.json())
app.use(cors())
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/text', (req, res) => {
  var text= {'text':"hello"}
  var data = JSON.stringify(text)
  res.json(text)
});

app.post('/session', (req,res) => {
  let handle = sessionToHandle[req.body.sessionkey]
  db.serialize(() => {
    db.each(`SELECT name FROM users where username='${handle}' `, (err, row) => {
      if (err) {
        console.error(err.message);
      }
      else {
        var name = row.name;
        res.json({'name': name, 'handle': handle})
      }
    })
  })
})

app.post('/signup', (req,res) => {
  db.serialize(() => {      
    db.run(`INSERT INTO users VALUES ('${req.body.username}','${req.body.password}','${req.body.name}')`, (err) => {
      if (err) {
        console.error(err.message);
      }
      const sessionkey = Math.floor(Math.random(0, 100));
      sessionToHandle[sessionkey] = req.body.username;
      res.json({'sessionkey': sessionkey});
      console.log("Inserted");
    });  
  });
});

app.post('/login', (req,res) => {
  db.serialize(() => {
    db.each(`SELECT password, name, count(*) as count FROM users where username='${req.body.username}' `, (err,row) => {      
      if (err) {
        console.error(err.message);
      }

      if (row.count == 0) {
        res.json({});
        console.log("No selection");
      }
      else {
        console.log(row.password + "--" + row.name);
        var correctPassword = row.password;
        var password = req.body.password;
        if (password === correctPassword) {
          const sessionkey = Math.floor(Math.random(0, 100));
          sessionToHandle[sessionkey] = req.body.username;
          res.json({'sessionkey': sessionkey});
        }
        else {
          res.json({});
        }
        console.log('Selected');     
      } 
    });
  });
});

/// POST -> "yahdkfjkdjf" 
/// POST <- "{"text": "hello"}
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
