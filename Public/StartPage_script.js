function myFunction() {
    var Dutycycle = document.getElementById("Dutycycle").value;
    console.log("Dutycicle= " + Dutycycle);
    var xhttp = new XMLHttpRequest();

    var query = "/Test/id/" + Dutycycle;
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


function links() {
    var richtung = "l"
    console.log("Richtung = " + richtung);
    var xhttp = new XMLHttpRequest();

    var query = "/Test/richtung/" + richtung;
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
    var richtung = "r"
    console.log("Richtung = " + richtung);
    var xhttp = new XMLHttpRequest();

    var query = "/Test/richtung/" + richtung;
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