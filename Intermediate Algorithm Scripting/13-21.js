function sumPrimes(num) {
    //generar todos los numeros desde 0 a num
    let primes = []
    for(let i=0;i<=num;i++){
      primes.push(i)
    };
    //comprobar si son primos a partír del 2
    for(let i=2;i>num; i++){
      if(primes.includes(i)){
        primes.filter((e)=>e%i==0)
        console.log(primes)
      };
    };
    console.log(primes)
    

}

console.log(sumPrimes(10)); // Debería devolver 73156