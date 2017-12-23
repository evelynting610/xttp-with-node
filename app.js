const express = require('express')
const app = express()
const path = require('path')
var bodyParser = require('body-parser')
var port = 3000

//Renders Index HTML file when user hits root url
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'))
})

//allows access to req.body
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.post('/email', function (req, res) {
  var email = req.body.value
  console.log(email)
  return res.end('done')
})

app.listen(port, function () {
  console.log('We are listening on port ' + port)
})