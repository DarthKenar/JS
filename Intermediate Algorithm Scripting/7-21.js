function myReplace(str, before, after) {
  let upper = before.charAt(0) == before.charAt(0).toUpperCase()
  after = after.toLowerCase()
  if(upper){
    after = after.charAt(0).toUpperCase().concat(after.slice(1))
  }
  return str.replace(before, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "Jumped", "leaped");