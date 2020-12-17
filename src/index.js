import cipher from './cipher.js';

// Funcion para codificar 

document.getElementById("btnEncode").addEventListener("click", function(){
    let texto=document.getElementById("string").value;
    let despl=document.getElementById("offset").value;
    let offset = parseInt(despl, 10);
    let codificado=cipher.encode(offset, texto);
    document.querySelector("#resultado").innerHTML=codificado;
}); 

document.getElementById("btnDecode").addEventListener("click", function(){
    let texto=document.getElementById("string").value;
    let despl=document.getElementById("offset").value;
    let offset = parseInt(despl, 10);
    let decodificado=cipher.decode(offset, texto);
    document.querySelector("#resultado").innerHTML=decodificado;
}); 
