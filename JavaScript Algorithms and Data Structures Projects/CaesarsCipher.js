function rot13(str) {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let strResponse = "";
  
    for (let i = 0; i < str.length; i++) {
      if (/^[a-zA-Z]+$/.test(str[i])) {
        let newIndex = (alphabet.indexOf(str[i]) + 13) % 26;
        strResponse = strResponse.concat(alphabet[newIndex]);
      } else {
        strResponse = strResponse.concat(str[i]);
      }
    }
  
    console.log(strResponse);
    return strResponse;
  }
  
  rot13("SERR PBQR PNZC");  // "FREE CODE CAMP"