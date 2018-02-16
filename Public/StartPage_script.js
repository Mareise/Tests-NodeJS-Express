function myFunction() {
    var Dutycycle = document.getElementById("Dutycycle").value;
    console.log("Dutycicle= " + Dutycycle);
    var xhttp = new XMLHttpRequest();
    
     xhttp.onload = function() {
        if(this.status==200) {
            console.log("JUHUUUUUUUUUU")
            document.getElementById('demo').innerHTML=this.status
        } else {
            document.getElementById('demo').innerHTML="Fehler"
            
        }
    }

    var query = "/Test/id/" + Dutycycle;
    console.log(query);
    xhttp.open("GET", query, true);
    xhttp.send();
}
