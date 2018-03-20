let getränkObj = [
    { id: 0, getränk: "malibu"},
    { id: 1, getränk: "rum"},
    { id: 2, getränk: "wodka"}
];

function myFunction() {

    console.log('Hallo');

    document.getElementById("Success").style.display = "";

};

function myFunction_warning() {

    document.getElementById("Warning").style.display = "";

    console.log('Hallo');

};

function Motor() {
    var dt = require('./myfirstmodule');

    dt.Motor;
}

function wodkaorange() {
    let standort = ablesen()
    console.log("wodkaorange")
    let getränkid = 2
   
    let xhttp = new XMLHttpRequest();

    let query = "/Bartender/getränk/" + getränkid;
    console.log(query);
    xhttp.open("GET", query, true);

    xhttp.onload = function () {
        if (this.status == 200) {
            console.log("JUHUUUUUUUUUU")
        } else {
            console.log("buuu")
        }
    }
    xhttp.onerror = function () {
        console.log("Error")
    }

    xhttp.send();
}

function ablesen() {
    let xhttp = new XMLHttpRequest();
    let query = "/Test/ablesen/";
    let result

    xhttp.open("GET", query, true)
    xhttp.onload = function () {
        if (this.status == 200) {
            console.log("JUHUUUUUUUUUU")
            result = this.responseText
        } else {
            console.log("buuu")
            result = this.responseText
        }
    }
    xhttp.onerror = function () {
        console.log("Error")
    }

    xhttp.send();
    return result
}

function rechts() {
    let richtung = 2
    console.log("Richtung = " + richtung);
    let xhttp = new XMLHttpRequest();

    let query = "/Test/richtung/" + richtung;
    console.log(query);
    xhttp.open("GET", query, true);

    xhttp.onload = function () {
        if (this.status == 200) {
            console.log("JUHUUUUUUUUUU")
            document.getElementById('demo').innerHTML = this.status
        } else {
            console.log("buuu")
            document.getElementById('demo').innerHTML = "Fehler"
        }
    }
    xhttp.onerror = function () {
        console.log("Error")
    }


    xhttp.send();
}

function links1() {
    let richtung = 1
    console.log("Richtung = " + richtung);
    let xhttp = new XMLHttpRequest();

    let query = "/Test/richtung/" + richtung;
    console.log(query);
    xhttp.open("GET", query, true);

    xhttp.onload = function () {
        if (this.status == 200) {
            console.log("JUHUUUUUUUUUU")
            document.getElementById('demo').innerHTML = this.status
        } else {
            console.log("buuu")
            document.getElementById('demo').innerHTML = "Fehler"
        }
    }
    xhttp.onerror = function () {
        console.log("Error")
    }


    xhttp.send();
}