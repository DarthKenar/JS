function largestOfFour(arr) {
    var maxArr = new Array(4);
    for(var i in arr){
      maxArr[i] = arr[i][0]
      for(var j in arr[i]){
        if(arr[i][j] > maxArr[i]){
          maxArr[i] = arr[i][j]
        }
      }
      
    }
    return maxArr;
  }
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
  