function confirmEnding(str, target) {
    var letters = target.length
    if(str.slice(str.length-letters,str.length)  == target){
      return true
    }else{
      return false
    }
  }
  confirmEnding("Bastian", "n");
  confirmEnding("Congratulation", "on")