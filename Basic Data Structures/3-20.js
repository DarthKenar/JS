function mixedNumbers(arr) {
    // Cambia solo el código debajo de esta línea
    arr.push(7)
    arr.push("VIII")
    arr.push(9)
    arr.unshift('three')
    arr.unshift(2)
    arr.unshift('I')
    // Cambia solo el código encima de esta línea
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));