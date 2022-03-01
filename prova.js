// Sfida 1: Soluzione
function dimmietà(){
    var anno = window.prompt("In che anno sei nato?:");
    var giorni = (2022-anno)*365;
    document.getElementById("answer-h2").innerText = "Sei vecchio di " + giorni + " giorni";
}
function resetta(){
    document.getElementById("answer-h2").innerText = "";
}

//Sfida 2: Soluzione
function generatore(){
    var image = document.createElement("img");
    var div = document.getElementById("container-img")
    image.src= "gatto11.gif";
    div.append(image);
}

