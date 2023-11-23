function convertToRoman(num) {
  let romanValue = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  }
  let respuesta = ""
  let romanKeysIndex = Object.keys(romanValue)
  let romanKeysLength = romanKeysIndex.length
  while(num>0){
    for(let i=0; i<romanKeysLength; i++){
      if(romanValue[romanKeysIndex[i]]<=num){
        num -= romanValue[romanKeysIndex[i]]
        respuesta = respuesta.concat(romanKeysIndex[i])
        break;
      }
    }
  }
  return respuesta;
}
convertToRoman(2);