const express = require('express');
const app = express();
const path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');

//Renders Index HTML file when user hits root url
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

//allows access to req.body
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

function currentDate() {
	var today = new Date();
	return today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
}
app.post('/email', function (req, res) {
  var email = req.body;
  var fileName = currentDate();
  fs.appendFile('./'+fileName+'.json', JSON.stringify(email)+'\n', (err) => {
  	if (err) {
  		console.error(err);
        return;
    }
  });
  return res.end('done');
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});