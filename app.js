// Required parameters
const port = 3000;
const hostname = '127.0.0.1';

// Database
const nedb = require('nedb');
const database = new nedb('database.db');
database.loadDatabase();

// Express
const express = require('express');
const app = express();
const bp = require('body-parser');
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

// Establish connection to server
app.listen(port, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});

// Static files
app.use(express.static('CoolWater'));
app.use('/css', express.static(__dirname + 'CoolWater/css'));
app.use('/javascript', express.static(__dirname + 'CoolWater/javascript'));

// Go to CoolWater home page
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/CoolWater/home.html');
});

// Collect data from donator form
app.post('/submitted', (req, res) => {
	res.sendFile(__dirname + '/CoolWater/submitted.html');
	database.insert(req.body);
});

// Error/Bug Message
app.use((error, req, res, next) => {
	throw new Error(error.toString());
});