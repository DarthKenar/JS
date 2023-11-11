function chunkArrayInGroups(arr, size) {
    var arrReturn = []
    var arrPartial = []
    for(var i = 0; i < arr.length; i++){
      arrPartial.push(arr[i])
      if((i+1)%(size) == 0){
        arrReturn.push(arrPartial)
        arrPartial = []
      }
    };
    if (arrPartial.length > 0){
      arrReturn.push(arrPartial)
    }
    return arrReturn
  }
  
  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2))
  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 3], 3))