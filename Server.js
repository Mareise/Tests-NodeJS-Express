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


app.get('/api/students/:studentId',
	function (req, res) {
		if (req.params.studentId == 1234) {
			res.status(404).send('Uuups!')
		}
		else {
			res.sendFile(path.join(__dirname + '/StartPage.html'));
		}
	}
)
