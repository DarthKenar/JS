function diffArray(arr1, arr2) {
  let newArr2 = arr2.filter((e) => !arr1.includes(e))
  let newArr1 = arr1.filter((e) => !arr2.includes(e))
  return newArr2.concat(newArr1);
}
diffArray([1, 2, 3, 7, 5], [1, 2, 3, 4, 5]);
