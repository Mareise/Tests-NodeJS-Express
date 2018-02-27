const express = require('express')
const app = express()
var path = require('path');

app.use(express.static('Public'))
app.listen(3000, function () {
	console.log('listening on port 3000')
})

app.get('/hello', function (req, res) {
	res.send('Hello World!')
})

var i2cBus = require("i2c-bus");
var Pca9685Driver = require("pca9685").Pca9685Driver;
var http = require('http');

var http = require('http'),
	fs = require('fs');

var options = {
	i2c: i2cBus.openSync(1),
	address: 0x40,
	frequency: 1000,
	debug: false
};

pwm = new Pca9685Driver(options, function (err) {
	if (err) {
		console.error("Error initializing PCA9685");
		process.exit(-1);
	}
	console.log("Initialization done");
})

app.get('/Test/id/:Id', function (req, res) {

			var dutycycle = parseInt(req.params.Id);

			// Set the duty cycle to 25% for channel 8
			console.log("Channel 8  done with" + dutycycle)
			pwm.setDutyCycle(8, dutycycle / 100);
			res.status(200).send('Geschafft')
	}
)

