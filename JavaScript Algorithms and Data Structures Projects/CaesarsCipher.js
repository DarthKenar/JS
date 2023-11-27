function rot13(str) {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let strResponse = "";

  for (let i = 0; i < str.length; i++) {
    if (/^[A-Z]+$/.test(str[i])) {
      let newIndex = (alphabet.indexOf(str[i]) + 13) % 26;
      console.log(newIndex)
      strResponse = strResponse.concat(alphabet[newIndex]);
    } else {
      strResponse = strResponse.concat(str[i]);
    }
  }

  console.log(strResponse);
  return strResponse;
}

rot13("SERR PBQR PNZC");