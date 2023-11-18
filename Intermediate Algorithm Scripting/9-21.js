function fearNotLetter(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    alphabet = alphabet.slice(alphabet.indexOf(str[0]))
    for(let i=0; i < str.length; i++){
      if(!(alphabet[i] == str[i])){
        return alphabet[i]
      };
    };
    return undefined;
}
fearNotLetter("abce");
