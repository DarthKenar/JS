function Dog(name) {
    this.name = name;
}

Dog.prototype = {
// Cambia solo el código debajo de esta línea
numLegs: 2,
eat: ()=>console.log("Come..."),
describe: ()=>console.log("Come...")
};