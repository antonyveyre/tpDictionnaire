'use strict';

// modules
const express = require('express');
const bodyParser = require('body-parser');

const dico = require('./dico.json');
const PORT = 9000;

const app = express();

app.use('/', express.static(__dirname + '/app'));

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/dico', function (req, res) {
	let params = req.body;
	console.log(console.log(params));
	res.send(JSON.stringify(dico.words));
});

app.listen(PORT);

console.log(`--------------------------------------------------
| The root folder is: '${__dirname}/app'
| You can access the application at: http://localhost:${PORT}
---------------------------------------------------------------`);
