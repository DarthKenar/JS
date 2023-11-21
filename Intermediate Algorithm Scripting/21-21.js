function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
  
    const calculateOrbitalPeriod = avgAlt => {
      const earth = earthRadius + avgAlt;
      return Math.round(2 * Math.PI * Math.sqrt(Math.pow(earth, 3) / GM));
    };
  
    return arr.map(({ name, avgAlt }) => ({
      name,
      orbitalPeriod: calculateOrbitalPeriod(avgAlt),
    }));
}

const result = orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
console.log(result);