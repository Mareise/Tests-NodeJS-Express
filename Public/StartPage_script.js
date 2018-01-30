function myFunction() {
    console.log("Seas")
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
        }
    };
    
    xhttp.open("GET", "/Test/id/1", true);
    xhttp.send();
}