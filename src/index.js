import cipher from './cipher.js';

// Funcion para codificar 

document.getElementById("btnEncode").addEventListener("click", function(){
    let texto=document.getElementById("string").value;
    let despl=document.getElementById("offset").value;
    let offset = parseInt(despl, 10);
    let resultado = ''
    
    if (!despl || !texto) { // falsy : undefined | null | "" | '' | 0
        resultado = "Falta ingresar el mensaje y el desplazamiento";
    } else {
        resultado = cipher.encode(offset, texto);         
    }

    document.querySelector("#resultado").innerHTML = resultado; 
    
    
});    

document.getElementById("btnDecode").addEventListener("click", function(){
    let texto=document.getElementById("string").value;
    let despl=document.getElementById("offset").value;
    let offset = parseInt(despl, 10);

    let resultado = ''
    
    if (!despl || !texto) { // falsy : undefined | null | "" | '' | 0
        resultado = "Falta ingresar el mensaje y el desplazamiento";
    } else {
        resultado = cipher.decode(offset, texto);         
    }
    document.querySelector("#resultado").innerHTML=resultado;
}); 
