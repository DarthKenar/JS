function nonMutatingSplice(cities) {

    return cities.slice(0,3);
  }
  let cities = [1,2,3,4,5,6]
  console.log(nonMutatingSplice(cities))