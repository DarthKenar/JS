function alphabeticalOrder(arr) {
    // Cambia solo el código debajo de esta línea
    arr.sort((a,b)=> a.localeCompare(b))
    console.log(arr)
    return arr
    // Cambia solo el código encima de esta línea
  }
  
  alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);