const cipher = {
  encode: function (offset, string) {
    if (!offset && !string) {
      throw new TypeError ("faltan el mensaje o el número de desplazamiento");
    }

    if(offset === 0 || !string ) {
      throw new TypeError('el número de desplazamiento no debe ser cero o falta el mensaje');
    }
    
    if(offset === null || string === [] ) {
      throw new TypeError('el número de desplazamiento debe ser número o falta el mensaje');
    }    
    
    if(offset === 0 || string === 0 ) {
      throw new TypeError('el número de desplazamiento o el mensaje es cero');
    } 

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
        finalNumber = 32;
      }

      newLetter = String.fromCharCode(finalNumber);

      encodeString += newLetter;
    }
    return encodeString;
  },


  decode: function (offset, string) {
    // ...Decodificacion
    let decodeString = "";
    let newLetter = " ";
    let ascciNumber = 0
    let finalNumber = 0
    
    if (!offset && !string) {
      throw new TypeError ("faltan el mensaje o el número de desplazamiento");
    }

    if(offset === 0 || !string ) {
      throw new TypeError('el número de desplazamiento no debe ser cero o falta el mensaje');
    }
    
    if(offset === null || string === [] ) {
      throw new TypeError('el número de desplazamiento debe ser número o falta el mensaje');
    }    
    
    if(offset === 0 || string === 0 ) {
      throw new TypeError('el número de desplazamiento o el mensaje es cero');
    } 
    for (let i = 0; i < string.length; i++) {

      ascciNumber = (string.charCodeAt(i))
      //Capital Letters from 65 to 90      
      if (ascciNumber != 32) {  // espacio
        finalNumber = (ascciNumber + 65 - offset) % 26 + 65;
      }
      else {
        finalNumber = 32;
      }

      newLetter = String.fromCharCode(finalNumber);                  

      decodeString += newLetter;
    }
    return decodeString;


  }

}
export default cipher;