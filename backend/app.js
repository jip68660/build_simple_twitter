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

// shared functions.
function createSessionkey(username) {
  const sessionkey = Math.floor(Math.random(0, 100));
  sessionToHandle[sessionkey] = username;
  return sessionkey;
}

app.post('/session', (req,res) => {
  console.log('handling /session');
  db.serialize(() => {
    let handle = sessionToHandle[req.body.sessionkey];
    if (handle === undefined) {
      res.json({'error': 'invalid session'});
      return
    }
    console.log("using handle: " + handle);
    db.each(`SELECT name FROM users WHERE username='${handle}' `, (err, row) => {
      console.log("selecting name");
      if (err) {
        console.error(err.message);
      }
      else {
        console.log("returning name and handle");
        res.json({'name': row.name, 'handle': handle})
      }
    });
  });
});

app.post('/signup', (req,res) => {
  console.log('handling /signup');
  db.serialize(() => {      
    db.run(`INSERT INTO users VALUES ('${req.body.username}','${req.body.password}','${req.body.name}')`, (err) => {
      if (err) {
        console.error(err.message);
      }
      console.log("inserting a row in users table");
      const sessionkey = createSessionkey(req.body.username);
      res.json({'sessionkey': sessionkey});
    });  
  });
});

app.post('/login', (req,res) => {
  console.log('handling /login');
  db.serialize(() => {
    db.each(`SELECT password, name, count(*) as count FROM users where username='${req.body.username}' `, (err,row) => {      
      if (err) {
        console.error(err.message);
      }
      if (row.count == 0) {
        res.json({"error":"could not find given user"});
      }
      else {
        console.log("comparing password");
        if (req.body.password === row.password) {
          const sessionkey = createSessionkey(req.body.username);
          res.json({'sessionkey': sessionkey});
        }
        else {
          res.json({"error":"wrong password"});
        }     
      } 
    });
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));