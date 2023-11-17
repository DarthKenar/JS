function sumAll(arr) {
    let total = 0
    let arrSorted = arr.sort((a,b)=>a-b)
    for(let i = arrSorted[0]; i < arrSorted[1]+1; i++){
      total += i
    };
    return total
}

sumAll([1, 4]);