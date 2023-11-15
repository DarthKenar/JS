const squareList = arr => {
    // Cambia solo el código debajo de esta línea
  
    return arr.filter((item) => item > 0).filter((item) => item % 1 == 0).map((item)=> item**2);
  
    // Cambia solo el código encima de esta línea
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);