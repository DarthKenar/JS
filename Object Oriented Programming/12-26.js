function Dog(name) {
    this.name = name;
  }
  
  // Cambia solo el código debajo de esta línea
  function joinDogFraternity(candidate) {
    if(candidate.constructor === Dog ){
      return true
    }else{
      return false
    }
  }