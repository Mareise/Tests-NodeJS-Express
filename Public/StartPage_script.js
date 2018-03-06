function myFunction() {
    let Dutycycle = document.getElementById("Dutycycle").value;
    console.log("Dutycicle= " + Dutycycle);
    let xhttp = new XMLHttpRequest();

    let query = "/Test/id/" + Dutycycle;
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

function ablesen() {
    let xhttp = new XMLHttpRequest();
    let query = "/Test/ablesen/";

    xhttp.open("GET", query, true)
    xhttp.onload = function () {
        if (this.status == 200) {
            console.log("JUHUUUUUUUUUU")
            document.getElementById('demo').innerHTML = this.responseText
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