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

function Motor() {
    var Dutycycle = document.getElementById("Dutycycle").value;
    console.log("Dutycicle= " + Dutycycle);
    var xhttp = new XMLHttpRequest();





    /*for (let i = 100; i >= 0; i--) {
        var delayInMilliseconds = 3000; //3 second
        console.log("aöskjdg")
        setTimeout(function () {
            var query = "/Test/id/" + i;
            console.log(i)
            //xhttp.open("GET", query, true);
           

            //xhttp.send();
        }, delayInMilliseconds);

    }*/

    var i = 100;                     //  set your counter to 1

    function myLoop() {           //  create a loop function
        setTimeout(function () {
            if (i == -1) {
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
