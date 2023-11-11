function getIndexToIns(arr, num) {
    arr.push(num)
    arr.sort((a, b) => a - b)
    return(arr.indexOf(num)) 
}
  
console.log(getIndexToIns([2, 5, 10], 15))