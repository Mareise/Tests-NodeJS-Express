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

app.get('/Test/id/:Id',
	function (req, res) {

		var dutycycle = parseInt(req.params.Id);
		console.log(dutycycle);
		console.log("Seas wos geht");

		console.log("Channel 8  done")
		pwm.setDutyCycle(8, dutycycle / 100);
		res.status(200).send('Geschafft')
	});



app.get('/Test/richtung/:richtung', function (req, res) {
	console.log("HALLO "+richtung)

	var richtung = parseInt(req.params.richtung);

	if (richtung == "1") { 				
		pwm.setDutyCycle(9, 0);
		MotorBeschleunigen(8)

		setTimeout(function () {
			MotorBremsen(8)	                   //  ..  setTimeout()
		}, 2000)

	}



	//-----------------------------------------------------------------
	if (richtung == "2") {
		pwm.setDutyCycle(8, 0);
		MotorBeschleunigen(9)

		setTimeout(function () {
			MotorBremsen(9)	                   //  ..  setTimeout()
		}, 2000)

	}
}
)



function MotorBremsen(kanal) {

	var i = 100;                     //  set your counter to 1

	function myLoop() {           //  create a loop function
		setTimeout(function () {
			if (i == 20) {
				dutycycle = 0;
				console.log(0)
				pwm.setDutyCycle(8, dutycycle / 100);
				return;
			}
			dutycycle = i
			pwm.setDutyCycle(kanal, dutycycle / 100);
			i--
			myLoop();             //  ..  again which will trigger another                                 //  ..  setTimeout()
		}, 10)
	}

	myLoop();
}

function MotorBeschleunigen(kanal) {

	var i = 0;                     //  set your counter to 1

	function myLoop() {           //  create a loop function
		setTimeout(function () {
			if (i == 100) {
				dutycycle = 100;
				console.log(100)
				pwm.setDutyCycle(8, dutycycle / 100);
				return;
			}
			dutycycle = i
			pwm.setDutyCycle(kanal, dutycycle / 100);
			i++
			myLoop();             //  ..  again which will trigger another                                 //  ..  setTimeout()
		}, 10)
	}

	myLoop();
}