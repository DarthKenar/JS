function palindrome(str) {
  str = str.toUpperCase().split("").filter((word)=>(/^[a-zA-Z0-9]+$/.test(word))).join("")
  for(let i=0; i<Math.floor((str.length)/2); i++){
    if(str[i] != str[str.length-1-i]){
      return false
    };
  };
  return true;
};
palindrome("eye");
palindrome("nope")