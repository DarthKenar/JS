function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  let beagle = new Dog("Snoopy");
  
  let ownProps = [];
  let prototypeProps = [];
  
  // Cambia solo el código debajo de esta línea
  for(let property in beagle){
    if (beagle.hasOwnProperty(property)){
      ownProps.push(property)
    }else{
      prototypeProps.push(property)
    }
  }
  
  