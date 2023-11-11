function repeatStringNumTimes(str, num) {
    var strSum = ""
    if(num < 1){
      return strSum
    }
    for(var i = 0; i < num; i++){
      console.log(str)
      strSum += str
    }
    return strSum
  }
  
  repeatStringNumTimes("abc", 3);