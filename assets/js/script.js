var cont=0;

function trocarHumor(){
    cont++;
    if (cont==1){
        document.getElementById("Pica Pau").src = "./assets/img/segunda2.png";
        document.getElementById("texto").innerHTML = "CANSADO &#128564 na Segunda";
    }
    else if (cont==2){
        document.getElementById("Pica Pau").src = "./assets/img/feliz.png";
        document.getElementById("texto").innerHTML = "FELIZ &#128512 na Terça";
    }
    else if (cont==3){
        document.getElementById("Pica Pau").src = "./assets/img/irritado1.png";
        document.getElementById("texto").innerHTML = "IRRITADO &#128544 na Quarta";
    }
    else if (cont==4){
        document.getElementById("Pica Pau").src = "./assets/img/biruta1.png";
        document.getElementById("texto").innerHTML = "BIRUTA &#129322 na Quinta";
    }
    else if (cont==5){
        document.getElementById("Pica Pau").src = "./assets/img/sextou.jpg";
        document.getElementById("texto").innerHTML = "SEXTOU &#129395 para o Pica Pau";
    }
    else if (cont==6){
        document.getElementById("Pica Pau").src = "./assets/img/inicio.jpg";
        document.getElementById("texto").innerHTML = "";
        cont=0;
    }
}