// Cambia solo el código debajo de esta línea
class Thermostat{
    constructor(temp){
      this._fahrenheit = temp;
    }
    get temperature(){
      return 5/9 * (this._fahrenheit - 32);
    }
    set temperature(temp){
      this._fahrenheit = (temp * 9.0) / 5 + 32;
    }
  }
  // Cambia solo el código encima de esta línea
  
  const thermos = new Thermostat(76); // Ajuste en escala Farenheit
  let temp = thermos.temperature; // 24.44 en Celsius
  thermos.temperature = 26;
  temp = thermos.temperature; // 26 en Celsius