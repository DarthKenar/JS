function uniteUnique(...arr) {
    let arrSortedUnion = []
    for(let i=0; i<arr.length; i++){
      for(let j=0; j<arr[i].length; j++){
        if(!(arrSortedUnion.includes(arr[i][j]))){
          arrSortedUnion.push(arr[i][j])
        };
      };
    };
    return arrSortedUnion
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);