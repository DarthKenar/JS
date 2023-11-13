let bird = {
    name: "Donald",
    numLegs: 2
};

let boat = {
name: "Warrior",
type: "race-boat"
};

// Cambia solo el código debajo de esta línea

let glideMixin = function(obj){
obj.glide = () => consolel.log("It's planning")
};
glideMixin(boat);
glideMixin(bird);