function myFunction() {

    const express = require('express')
    const bodyParser = require('body-parser');
    console.log("MyFunction");
    const app = express()
    // parse 'Content-Type: application/x-www-formurlencoded'
    app.use(bodyParser.urlencoded({ extended: false }))
    app.post('/forms/savePerson', function (req, res) {
        console.log(req.body)
        res.send('POST /forms/savePerson');
    })


};