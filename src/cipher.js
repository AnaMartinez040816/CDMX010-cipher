const cipher = {
  encode: function (offset, string) {
    //validando entradas
    //if (offset === null  &&  string === null){
     //  throw new TypeError(¨Falta ingresar el mensaje y el desplazamiento)
    //}
    // ...Codificacion
      //Capital Letters from 65 to 90  
    let encodeString = "";
    let newLetter = " ";
    let ascciNumber = 0
    let finalNumber = 0
    for (let i = 0; i < string.length; i++) {
      ascciNumber = (string.charCodeAt(i))
      if (ascciNumber != 32) {  // espacio
        finalNumber = (ascciNumber - 65 + offset) % 26 + 65;
      }
      else {
        finalNumber = 32
      }
      //aqui debe cerrse el if

      newLetter = String.fromCharCode(finalNumber);

      encodeString += newLetter;
    }
    return encodeString;
  },


  decode: function (offset, string) {
    // ...Decodificacion
    let encodeString = "";
    let newLetter = " ";
    let ascciNumber = 0
    let finalNumber = 0
    for (let i = 0; i < string.length; i++) {

      ascciNumber = (string.charCodeAt(i))
      //Capital Letters from 65 to 90      
      if (ascciNumber != 32) {  // espacio
        finalNumber = (ascciNumber - 65 - offset) % 26 + 65;
      }
      else {
        finalNumber = 32
      }
      //aqui debe cerrse el if

      newLetter = String.fromCharCode(finalNumber);                  

      encodeString += newLetter;
    }
    return encodeString;


  }



}
export default cipher;