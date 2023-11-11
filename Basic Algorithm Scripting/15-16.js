function mutation(arr) {
    var arrFirst = arr[0].toLowerCase()
    var arrSecond = arr[1].toLowerCase()
    for(var i = 0; i < arrSecond.length; i++){
      if(arrFirst.indexOf(arrSecond[i]) == -1){
        return false
      };
    };
    return true
  };
  
  mutation(["shelloy", "hsey"]);