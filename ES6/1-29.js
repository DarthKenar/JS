let printNumTwo;
for (let i = 0; i < 3; i++) {
    console.log("en el for ",i)
    if (i === 2) {
        console.log("en el if ",i)
        printNumTwo = function() {
            return i;
        };
    }
}
console.log("Llamada a la funcion",printNumTwo());
/*
En este código, la variable i está declarada con var,
lo que significa que su alcance es global y no está limitado al bloque for.
Entonces, cuando el bucle for termina, el valor de i es 3.
La función printNumTwo devuelve el valor de i, que es 3.
Lo que sucede es que la función printNumTwo no se ejecuta en ese momento, 
sino que se define y se asigna a la variable printNumTwo.
La función solo se ejecuta cuando se llama con printNumTwo().
En ese momento, el valor de i ya es 3 porque el bucle for ha terminado.
Cuando declaras la variable i con let en lugar de var, su alcance se limita al bloque for.
Esto significa que cada iteración del bucle for tiene su propia variable i.
Entonces, cuando defines la función printNumTwo, esta captura el valor de i en ese momento, que es 2.
Cuando llamas a la función con printNumTwo(), devuelve 2.
*/