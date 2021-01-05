import cipher from './cipher.js';

// Funcion para codificar 

document.getElementById("btnEncode").addEventListener("click", function () {
    let textEntry = document.getElementById("string").value;
    let text = textEntry.toUpperCase();
    let displacement = document.getElementById("offset").value;
    let offset = parseInt(displacement, 10);
    let encodeString = ''
    
    if (!displacement || !text) { 
       encodeString = "Falta ingresar el mensaje y o el desplazamiento";
    } else {
        encodeString = cipher.encode(offset, text);
    }
    document.querySelector("#outcome").innerHTML = encodeString;

});

document.getElementById("btnDecode").addEventListener("click", function () {
    let textEntry = document.getElementById("string").value;
    let text = textEntry.toUpperCase();
    let displacement = document.getElementById("offset").value;
    let offset = parseInt(displacement, 10);
    let decodeString = ''
    if (!displacement || !text) { // falsy : undefined | null | "" | '' | 0
       decodeString = "Falta ingresar el mensaje y o el desplazamiento";
    } else {
        decodeString = cipher.decode(offset, text);
    }
    document.querySelector("#outcome").innerHTML = decodeString;
}); 
