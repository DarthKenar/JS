function sumPrimes(num) {
    // Función para generar la criba de Eratóstenes
    function generatePrimesSieve(limit) {
        const sieve = Array(limit + 1).fill(true);
        sieve[0] = sieve[1] = false;

        for (let i = 2; i <= Math.sqrt(limit); i++) {
            if (sieve[i]) {
                for (let j = i * i; j <= limit; j += i) {
                    sieve[j] = false;
                }
            }
        }
        return sieve;
    }

    // Generar la criba de Eratóstenes hasta el número dado
    const primesSieve = generatePrimesSieve(num);

    // Sumar los números primos generados por la criba
    let sum = 0;
    for (let i = 2; i <= num; i++) {
        if (primesSieve[i]) {
            sum += i;
        }
    }

    return sum;
}

console.log(sumPrimes(977)); // Debería devolver 73156