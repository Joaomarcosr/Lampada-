const liga = document.querySelector("#turnOn");
const desliga = document.querySelector("#turnOff");
const lamp = document.querySelector("#lampada");
const wrap = document.querySelector("body")


function lampOn () {
    lamp.src = "./assets/ligada.jpg";
    lamp.style.opacity="1";
    wrap.style.animation= "bgpisca .1s infinite ";
    liga.style.display="none"
    desliga.style.display="block"
}
function lampOff() {
    lamp.src = "./assets/desligada.jpg";
    wrap.style.animation="none"
    wrap.style.background="black";
    lamp.style.opacity= "0"
    desliga.style.display="none"
    liga.style.display="block"
}
function broke() {
    lamp.src = "./assets/quebrada.jpg"
}


turnOn.addEventListener("click", lampOn);
turnOff.addEventListener("click", lampOff);
lampada.addEventListener("dblclick", broke);
