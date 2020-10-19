var rt1 = document.getElementById("rt1");
var rt2 = document.getElementById("rt2");
var rt3 = document.getElementById("rt3");
var rt4 = document.getElementById("rt4");
var rt5 = document.getElementById("rt5");
var rt6 = document.getElementById("rt6");



function puntuar(rate) {

    if (rate == rt1) {
        document.getElementById("rt1").style.color = "yellow";
        document.getElementById("rt2").style.color = "black";
        document.getElementById("rt3").style.color = "black";
        document.getElementById("rt4").style.color = "black";
        document.getElementById("rt5").style.color = "black ";
    }


    if (rate == rt2) {
        document.getElementById("rt1").style.color = "yellow";
        document.getElementById("rt2").style.color = "yellow";
        document.getElementById("rt3").style.color = "black";
        document.getElementById("rt4").style.color = "black";
        document.getElementById("rt5").style.color = "black "

        console.log("Hola");
    }
    if (rate == rt3) {
        document.getElementById("rt1").style.color = "yellow";
        document.getElementById("rt2").style.color = "yellow";
        document.getElementById("rt3").style.color = "yellow";
        document.getElementById("rt4").style.color = "black";
        document.getElementById("rt5").style.color = "black "

        console.log("Hola");
    }
    if (rate == rt4) {
        document.getElementById("rt1").style.color = "yellow";
        document.getElementById("rt2").style.color = "yellow";
        document.getElementById("rt3").style.color = "yellow";
        document.getElementById("rt4").style.color = "yellow";
        document.getElementById("rt5").style.color = "black "
        console.log("Hola");
    }
    if (rate == rt5) {
        document.getElementById("rt1").style.color = "yellow";
        document.getElementById("rt2").style.color = "yellow";
        document.getElementById("rt3").style.color = "yellow";
        document.getElementById("rt4").style.color = "yellow";
        document.getElementById("rt5").style.color = "yellow ";

        console.log("Hola");
    }


    if (rate !== rt1 && rate !== rt2 && rate !== rt3 && rate !== rt4 && rate !== rt5) {
        document.getElementById("rt1").style.color = "black";
        document.getElementById("rt2").style.color = "black";
        document.getElementById("rt3").style.color = "black";
        document.getElementById("rt4").style.color = "black";
        document.getElementById("rt5").style.color = "black";

    }


}