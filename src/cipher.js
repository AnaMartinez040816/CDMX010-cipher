const cipher = {
  encode: function (offset, string) {
    // ...Codificacion
    let encodeString = "";
    let newLetter = " ";
    let ascciNumber = 0
    let finalNumber = 0
    for (let i = 0; i < string.length; i++) {
      //Capital Letters from 65 to 90
      ascciNumber = (string.charCodeAt(i))
      console.log(ascciNumber)
      if (ascciNumber != 32) {
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
    let decodeString = "";
    for (let i = 0; i < string.length; i++) {
      let finalNumber = ((string.charCodeAt(i)) - 65 - offset) % 26 + 65;
      let newLetter = String.fromCharCode(finalNumber);
      decodeString += newLetter;
    }
    return decodeString;
  }

}


export default cipher;