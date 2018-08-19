let fs = require('fs');
let express = require('express');
let bodyParser = require('body-parser');
let port = 3780;
let app = express();
app.listen(port);

console.log('Mock server listening on port ' + port);
let data = "gdgklasdghio\n'";

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/json'}));
app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});


app.use(function (req, res, next) {
    console.log('next');
    next();
});

app.get('/', function (req, res, next) {
    console.log('Request Type:', req.method);
    console.log(data);
    res.send('hello /foo');
    // next();
});

fs.readFile('log.txt', 'utf8', function(err, contents) {
    console.log(contents);
});

fs.appendFile("log.txt", data, function(err) {
    if (er) throw err;
    console.log("Saved!");
});