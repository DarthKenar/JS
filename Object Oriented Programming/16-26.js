function Dog(name) {
    this.name = name;
  }
  
  let beagle = new Dog("Snoopy");
  
  Dog.prototype.isPrototypeOf(beagle);  // produce true
  
  // Arregla el código de abajo para que evalúe a true
  Object.prototype.isPrototypeOf(Dog.prototype);