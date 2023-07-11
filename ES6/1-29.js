var printNumTwo;
for (var i = 0; i < 3; i++) {
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
¡Te damos la bienvenida! ¿Sobre qué te gustaría hablar?
porque en este codigo:
var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());

la llamada a la funcion imprime 3 y no imprime 2? Me lo podrías explicar como si le explicases a un niño?
Claro, te lo explico. En este código, la variable i está declarada con var, lo que significa que su alcance es global y no está limitado al bloque for. Entonces, cuando el bucle for termina, el valor de i es 3. La función printNumTwo devuelve el valor de i, que es 3. ¿Te queda claro? ¿Necesitas más detalles?

1
de
30
porque antes de volver al for osea: cuando realiza estas lineas:
        printNumTwo = function() {
            return i;
        };
la i pasa a valer 3. para mi no tiene sentido. como puede ser que si la i justo antes de declarar printNumTwo el valor era de 2 y cuando declara la funcion la i vale 3. Sigo sin entender
Entiendo tu confusión. Lo que sucede es que la función printNumTwo no se ejecuta en ese momento, sino que se define y se asigna a la variable printNumTwo. La función solo se ejecuta cuando se llama con printNumTwo(). En ese momento, el valor de i ya es 3 porque el bucle for ha terminado. ¿Te queda más claro ahora?

2
de
30
claro exelente respuesta, Dios te bendiga
Me alegra haberte ayudado. Si tienes más preguntas, no dudes en hacerlas. ¡Que tengas un buen día! 😊

3
de
30
y porque con let es diferente? que sucede cuando declaro a la variable i con el let. el bucle for no termina de ejecutarse? porque pasa eso? no debería valer 3 tambien?
Cuando declaras la variable i con let en lugar de var, su alcance se limita al bloque for. Esto significa que cada iteración del bucle for tiene su propia variable i. Entonces, cuando defines la función printNumTwo, esta captura el valor de i en ese momento, que es 2. Cuando llamas a la función con printNumTwo(), devuelve 2. ¿Te queda claro?
*/