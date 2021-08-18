let palabra = [];
let cantidadLetras = 0;


function contarLetras(){
    palabra = document.getElementById("palabra").value; 
    
    for (let i = 0; i < palabra.length; i++) {
        cantidadLetras++;
    }
    
    document.body.innerHTML += "<center><h3><b>"+ palabra + " tiene un total de: "+ cantidadLetras + " Letras</b></h3></center>";
    cantidadLetras = 0;
}




