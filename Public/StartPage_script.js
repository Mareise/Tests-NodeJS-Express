function myFunction() {
    console.log("Seas")
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
        }
    };
<<<<<<< HEAD
    xhttp.open("GET", "/Test/id/50", true);
=======
    xhttp.open("GET", "/Test/id/:1", true);
>>>>>>> parent of 6666151... estssdadfnwmhrsmzaksty
    xhttp.send();
}