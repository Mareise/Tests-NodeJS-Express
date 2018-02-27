function myFunction() {
    var Dutycycle = document.getElementById("Dutycycle").value;
    console.log("Dutycicle= " + Dutycycle);
    var xhttp = new XMLHttpRequest();

    var query = "/Test/id/" + Dutycycle;
    console.log(query);
    xhttp.open("GET", query, true);
    
     xhttp.onload = function() {
        if(this.status==200) {
            console.log("JUHUUUUUUUUUU")
            document.getElementById('demo').innerHTML=this.status
        } else {
            console.log("buuu")
            document.getElementById('demo').innerHTML="Fehler"
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

     xhttp.onload = function() {
        if(this.status==200) {
            console.log("JUHUUUUUUUUUU")
            document.getElementById('demo').innerHTML=this.status
        } else {
            console.log("buuu")
            document.getElementById('demo').innerHTML="Fehler"
        }
    }
    xhttp.onerror = function () {
        console.log("Error")
    }

    

    for (let i=100;i>=0;i--) {
        var query = "/Test/id/" + i;
        console.log(i)
        xhttp.open("GET", query, true);
        var delayInMilliseconds = 10000; //1 second

    setTimeout(function() {
        xhttp.send();
    }, delayInMilliseconds);
        
    }
}