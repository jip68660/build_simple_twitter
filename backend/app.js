const express = require('express')
const fetch = require('node-fetch')
const app = express()
const port = 3000

app.use(express.json())
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/text', (req, res) => {
  var text= {'text':"hello"}
  var data = JSON.stringify(text)
  res.json(text)
})

const fs = require('fs')

fs.writeFile("/tmp/text", "hello there", function(err) {
  if(err) {
    return console.log(err); 
  }
  console.log("the file was saved");
})

app.post('/text', (req,res) => {
  /// in the DB.
  const ultimatePassword = "hello123";
  const ultimateName = "JH";

  var username = req.body.username
  console.log(req.body)
  var password = req.body.password
  if (ultimatePassword === password) {
    res.json({'name':ultimateName})
  }
  else {
    res.json({})
  }

})

/// POST -> "yahdkfjkdjf" 
/// POST <- "{"text": "hello"}


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const fetchPromise = fetch("https://ghibliapi.herokuapp.com/people");
// fetchPromise.then(response => {
//   console.log(response);
// });