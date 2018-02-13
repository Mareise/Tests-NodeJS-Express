function myFunction() {
    var Dutycycle = document.getElementById("Dutycycle").value;
    console.log("Dutycicle" + Dutycycle);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log("Respnse:"+this.responseText)
            document.getElementById("demo").innerHTML = this.responseText;
        }
    };

    var query = "/Test/id/" + Dutycycle;
    console.log(query);
    xhttp.open("GET", query, true);
    xhttp.send();
}
