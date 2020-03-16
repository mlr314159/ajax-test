var xhr = new XMLHttpRequest();
var data;

xhr.open("GET", "https://swapi.co/api/");
xhr.send();

xhr.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        document.getElementById("data").innerHTML = this.responseText;
        console.log(typeof(this.responseText));
        console.log(typeof(JSON.parse(this.responseText)));
        console.log(JSON.parse(this.responseText));
        data = this.responseText;
    }
};

console.log(data);