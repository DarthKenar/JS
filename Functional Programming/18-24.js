const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Cambia solo el código debajo de esta línea
  let newArr = arr.concat()
  newArr.sort((a,b) => a-b)
  return newArr
  // Cambia solo el código encima de esta línea
}

nonMutatingSort(globalArray);
nonMutatingSort([1, 30, 4, 21, 100000])