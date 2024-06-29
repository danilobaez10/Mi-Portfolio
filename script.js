let diccionario = ['APPLE', 'HURLS', 'WINGS', 'YOUTH']
let intentos = 6;
let aleatorio =Math.floor(Math.random() * (diccionario.length));
let palabra = diccionario[aleatorio]

const button = document.getElementById("guess-button");

button.addEventListener("click", intentar);

function intentar(){
    let GRID= document.getElementById("grid");
    let ROW = document.createElement("div");
    ROW.className = "row";
    let INTENTAR = leerIntento();
    if(INTENTAR.length !==5){
        alert("Debe contener 5 letras");
        return;
    }   
    if(INTENTAR === palabra){
        terminar("<h1>GANASTE!🥳 </h1>");
        console.log("Ganaste");
        return;
    }
    for( let i = 0; i < palabra.length; i++){
        let SPAN = document.createElement("span");
        SPAN.className = "letter";
        
        if(INTENTAR[i]=== palabra[i]){
            console.log(INTENTAR[i],"Verde");
            SPAN.innerHTML = INTENTAR[i];
            SPAN.style.backgroundColor = "#79b851";
        }
        else if(palabra.includes(INTENTAR[i])){
            SPAN.innerHTML = INTENTAR[i];
            SPAN.style.backgroundColor = "#f3c237";
            console.log(INTENTAR[i],"Amarillo");
        }
        else{
            SPAN.innerHTML = INTENTAR[i];
            SPAN.style.backgroundColor = "#a4aec4";
            console.log(INTENTAR[i],"Gris");
        }
        ROW.appendChild(SPAN);
    }
    GRID.appendChild(ROW);

    intentos--
    if (intentos == 0){
        terminar("<h1>PERDISTE😓</h1>");
        console.log("PERDISTE");
    }
    
}
function leerIntento(){
    let  intento = document.getElementById("guess-input").value;
    intento = intento.toUpperCase();
    return intento;
}

function terminar(mensaje){
    let INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    button.disabled = true;
    let contenedor = document.getElementById("guesses");
    contenedor.innerHTML = mensaje;
}


