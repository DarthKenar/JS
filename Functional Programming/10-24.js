Array.prototype.myFilter = function(callback) {
    const newArray = [];
    // Cambia solo el código debajo de esta línea
    for(let i = 0; i < this.length; i++){
      if(this.hasOwnProperty(i)){
        if (callback(this[i], i, this)){
          newArray.push(this[i]);
        };
      };
    };
    console.log(newArray)
    // Cambia solo el código encima de esta línea
    return newArray;
};

console.log([23, 65, 98, 5, 13].myFilter(item => item % 2))
console.log([23, 65, 98, 5, 13].myFilter(item => item))