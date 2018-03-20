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

// encoder Inkrementalgeber
var raspi = require('raspi');
var RotaryEncoder = require('raspi-rotary-encoder').RotaryEncoder;

var encoder = new RotaryEncoder({
	pins: { a: "GPIO17", b: "GPIO18" },
	pullResistors: { a: "up", b: "up" }
});
var result

let getränkObj = [
	{ id: 0, getränk: "malibu", position: "-88" },
	{ id: 1, getränk: "rum", position: "2" },
	{ id: 2, getränk: "wodka", position: "98" }
];
let standort = 0

// --------------------------------------------------------------------------

// PWM Initialization
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

// --------------------------------------------------------------------------	

function links(dauer) {
	pwm.setDutyCycle(9, 0);
	MotorBeschleunigen(8)

	setTimeout(function () {
		MotorBremsen(8)	                   //  ..  setTimeout()
	}, dauer)
}

function rechts(dauer) {
	pwm.setDutyCycle(8, 0);
	MotorBeschleunigen(9)

	setTimeout(function () {
		MotorBremsen(9)	                   //  ..  setTimeout()
	}, dauer)
}

// -------------------------------------------------------------------------	

app.get('/Bartender/getraenk/:getraenk', function (req, res) {
	console.log("HALLO")

	var fs = require('fs');
	var getränkid = parseInt(req.params.getraenk);

	

	getränkestandort = getränkObj[getränkid].position

	getränkestandort = 180

	for (;;) {
		if (getränkestandort < standort) {
			links(1000)
		}

		if (getränkestandort > standort) {
			console.log("AAAAAAAAAAHHH")
			pwm.setDutyCycle(8, 0);
			MotorBeschleunigen(9)

			var timer = setTimeout(function () {
				
				if (getränkestandort == standort) {
					clearTimeout(timer);
				}            
			}, 10000)
			MotorBremsen(9)
			break;
		}
	}
	res.status(200).send('Geschafft')


});



// -------------------------------------------------------------------------

function MotorBremsen(kanal) {

	var i = 100;                     //  set your counter to 1

	function myLoop() {           //  create a loop function
		setTimeout(function () {
			if (i == 20) {
				dutycycle = 0;
				console.log(0)
				pwm.setDutyCycle(kanal, dutycycle / 100);
				return;
			}
			dutycycle = i
			pwm.setDutyCycle(kanal, dutycycle / 100);
			console.log("Dutycicle: " + dutycycle + " auf Kanal:" + kanal)
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
				pwm.setDutyCycle(kanal, dutycycle / 100);
				return;
			}
			dutycycle = i
			pwm.setDutyCycle(kanal, dutycycle / 100);
			console.log("Dutycicle: " + dutycycle + " auf Kanal:" + kanal)
			i++
			myLoop();             //  ..  again which will trigger another                                 //  ..  setTimeout()
		}, 10)
	}

	myLoop();
}



// -------------------------------------------------------------------------

raspi.init(function () {

	encoder.addListener('change', function (evt) {
		
		result = evt.value
		standort = evt.value
		console.log('Standort', standort);

	})

});

