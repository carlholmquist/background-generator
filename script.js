var color1 = document.getElementsByName("color1")[0];
var color2 = document.getElementsByName("color2")[0];
var body = document.querySelector("body");
var css = document.getElementsByTagName("p")[0];

function colorChanger (){
    body.style.background = "linear-gradient(to right, " 
    + color1.value 
    + ", "
    + color2.value 
    +")";
    css.innerHTML = "";
    css.appendChild(document.createTextNode(color1.value + " " + color2.value));
}

color1.addEventListener("input", colorChanger)

color2.addEventListener("input",colorChanger)