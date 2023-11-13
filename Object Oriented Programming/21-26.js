function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Cambia solo el código debajo de esta línea

Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog;
Dog.prototype.bark = () => console.log("Woof!")
Dog.prototype.eat = () => console.log("nom nom nom")
// Cambia solo el código encima de esta línea

let beagle = new Dog();