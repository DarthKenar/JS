function frankenSplice(arr1, arr2, n) {
    var arr3 = [] 
    return arr3 = [...arr2.slice(0,n), ...arr1, ...arr2.slice(n,arr2.length)]
}
  
frankenSplice([1, 2, 3], [4, 5, 6], 1);