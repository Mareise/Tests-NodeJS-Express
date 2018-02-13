function myFunction() {
    var Dutycycle = document.getElementById("Dutycycle").value;
    console.log("Dutycicle= " + Dutycycle);
    var xhttp = new XMLHttpRequest();
    
     httpReq.onload = function() {
        if(this.status==200) {
            console.log("JUHUUUUUUUUUU")
            document.getElementById('demo').innerHTML=this.status
        } else {
            let errorTxt = 'Error: '+this.status+' ('+this.statusText+')'
            document.getElementById('demo').innerHTML=errorTxt
            
        }
    }

    var query = "/Test/id/" + Dutycycle;
    console.log(query);
    xhttp.open("GET", query, true);
    xhttp.send();
}
