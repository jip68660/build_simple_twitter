const express = require('express')
const fetch = require('node-fetch')
const app = express()
const port = 3000
const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./chinook.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});

app.use(express.json())
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/text', (req, res) => {
  var text= {'text':"hello"}
  var data = JSON.stringify(text)
  res.json(text)
})
app.post('/signup', (req,res) => {
  db.serialize(() => {
    db.each(`INSERT into users VALUES ('${req.body.username}', '${req.body.password}', '${req.body.name}')`, (err) => {
      if (err) {
        console.error(err.message);
      }
      console.log("Inserted");
    });
  });
});

<<<<<<< HEAD
app.post('/login', (req,res) => {
=======
app.post('/text', (req,res) => {
>>>>>>> ce9084139180e9decd1337bc468c5d8875365866
  db.serialize(() => {
    db.each(`SELECT password, name FROM users where username='${req.body.username}' `, (err,row) => {
      
      if (err) {
        console.error(err.message);
      }
      var correctPassword = row.password;
      var password = req.body.password;
      if (password === correctPassword) {
        var userName = row.name;
        res.json({'name': userName});
      }
      else {
        res.json({});
      }

      console.log('Selected');
    });
  });
<<<<<<< HEAD
=======

  /// in the DB.
  // const ultimatePassword = "hello123";
  // const ultimateName = "JH";

  // var username = req.body.username
  // console.log(req.body)
  // var password = req.body.password
  // if (ultimatePassword === password) {
  //   res.json({'name':ultimateName})
  // }
  // else {
  //   res.json({})
  // }
>>>>>>> ce9084139180e9decd1337bc468c5d8875365866
});

/// POST -> "yahdkfjkdjf" 
/// POST <- "{"text": "hello"}
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const fetchPromise = fetch("https://ghibliapi.herokuapp.com/people");
// fetchPromise.then(response => {
//   console.log(response);
// });

// db.close((err) => {
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log("Close the database connection.");
// });