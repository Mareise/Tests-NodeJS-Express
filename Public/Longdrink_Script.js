let getränkObj = [
    { id: 0, getränk: "malibu"},
    { id: 1, getränk: "rum"},
    { id: 2, getränk: "wodka"},
    { id: 3, getränk: "whiskey"}
];

function myFunction() {

    console.log('Hallo');

    document.getElementById("Success").style.display = "";

};

function myFunction_warning() {

    document.getElementById("Warning").style.display = "";

    console.log('Hallo');

};

function wodkaorange() {
    console.log("wodkaorange wird hergerichtet")
    
   
    let getränkid = 2
   
    let xhttp = new XMLHttpRequest();

    let query = "/Bartender/getraenk/" + getränkid;
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

function malibu() {
    console.log("wodkaorange wird hergerichtet")
    
   
    let getränkid = 0
   
    let xhttp = new XMLHttpRequest();

    let query = "/Bartender/getraenk/" + getränkid;
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

function rum() {
    console.log("wodkaorange wird hergerichtet")
    
   
    let getränkid = 1
   
    let xhttp = new XMLHttpRequest();

    let query = "/Bartender/getraenk/" + getränkid;
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

function whiskey() {
    console.log("whiskey wird hergerichtet")
    
   
    let getränkid = 3
   
    let xhttp = new XMLHttpRequest();

    let query = "/Bartender/getraenk/" + getränkid;
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