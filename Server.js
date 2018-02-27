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




app.get('/Test/id/:Id',
	function (req, res) {
		
		var dutycycle = parseInt(req.params.Id);
		console.log(dutycycle);
		

			var i2cBus = require("i2c-bus");
			var Pca9685Driver = require("pca9685").Pca9685Driver;
			var http = require('http');

			var http = require('http'),
				fs = require('fs');

			var options = {
				i2c: i2cBus.openSync(1),
				address: 0x40,
				frequency: 50,
				debug: false
			};
			console.log("Seas wos geht");
			pwm = new Pca9685Driver(options, function (err) {
				if (err) {
					console.error("Error initializing PCA9685");
					process.exit(-1);
				}
				console.log("Initialization done");

				// Set channel 0 to turn on on step 42 and off on step 255
				// (with optional callback)
				pwm.setPulseRange(0, 42, 255, function () {
					if (err) {
						console.error("Error setting pulse range.");
					} else {
						console.log("Pulse range set.");
					}
				});

				// Set the pulse length to 1500 microseconds for channel 2
				pwm.setPulseLength(2, 1500);

				// Set the duty cycle to 25% for channel 8
				console.log("Channel 8  done")
				pwm.setDutyCycle(8, dutycycle/100);
				res.status(200).send('Geschafft')
				console.log(res.status());

				// Turn on channel 3 (100% power)
				pwm.channelOn(3);
			});
	}
)

