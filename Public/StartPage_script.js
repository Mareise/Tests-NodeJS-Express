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

function MotorBremsen() {
    var Dutycycle = document.getElementById("Dutycycle").value;
    console.log("Dutycicle= " + Dutycycle);
    var xhttp = new XMLHttpRequest();


    var i = 100;                     //  set your counter to 1

    function myLoop() {           //  create a loop function
        setTimeout(function () {
            if (i == 20) {
                var query = "/Test/id/" + 0;
                console.log(0)
                xhttp.open("GET", query, true);
                xhttp.send();
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
                return;
            }
            var query = "/Test/id/" + i;
            console.log(i)
            xhttp.open("GET", query, true);
            xhttp.send();                    //  increment the counter                               //  if the counter < 10, call the loop function
            i--;
            myLoop();             //  ..  again which will trigger another                                 //  ..  setTimeout()
        }, 10)
    }

    myLoop();
}


function MotorBeschleunigen() {
    var Dutycycle = document.getElementById("Dutycycle").value;
    console.log("Dutycicle= " + Dutycycle);
    var xhttp = new XMLHttpRequest();

    var i = 20;
    function myLoop() {
        setTimeout(function () {
            if (i == 100) {
                var query = "/Test/id/" + i;
                console.log(i)
                xhttp.open("GET", query, true);
                xhttp.send();
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
                return;
            }
            var query = "/Test/id/" + i;
            console.log(i)
            xhttp.open("GET", query, true);
            xhttp.send();                    //  increment the counter                               //  if the counter < 10, call the loop function
            i++;
            myLoop();             //  ..  again which will trigger another                                 //  ..  setTimeout()
        }, 10)
    }

    myLoop();
}