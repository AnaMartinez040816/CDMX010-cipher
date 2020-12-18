import cipher from './cipher.js';

// Funcion para codificar 

document.getElementById("btnEncode").addEventListener("click", function () {
    let textEntry = document.getElementById("string").value;
    let texto = textEntry.toUpperCase();
    let despl = document.getElementById("offset").value;
    let offset = parseInt(despl, 10);
    let encodeString = ''
    if (!despl || !texto) { // falsy : undefined | null | "" | '' | 0    Este if es para validar los datos ingresados
       encodeString = "Falta ingresar el mensaje y o el desplazamiento";
    } else {
        encodeString = cipher.encode(offset, texto);
    }
    document.querySelector("#outcome").innerHTML = encodeString;

});

document.getElementById("btnDecode").addEventListener("click", function () {
    let textEntry = document.getElementById("string").value;
    let texto = textEntry.toUpperCase();
    let despl = document.getElementById("offset").value;
    let offset = parseInt(despl, 10);

    let decodeString = ''

    if (!despl || !texto) { // falsy : undefined | null | "" | '' | 0
       decodeString = "Falta ingresar el mensaje y o el desplazamiento";
    } else {
        decodeString = cipher.decode(offset, texto);
    }
    document.querySelector("#outcome").innerHTML = decodeString;
}); 
