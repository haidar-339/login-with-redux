var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');

//enable CORS for request verbs
app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
	next();
});

app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

app.use(bodyParser.json());

//Handle POST method
app.post('/user-login', function (req, res) {
	const {} = req;
	const {} = res;
	const person = { name: 'haidar' };
	if (person.name === req.body.userName) {
		res.send({
			message: 'login successfull',
			user: { name: req.body.userName, age: 25 },
		});
	}
	res.send({ message: 'your req is denied' });
});

var server = app.listen(8081, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});
