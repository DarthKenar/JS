function Bird() {
    let weight = 15;
    this.getWeight = () => weight;
}

var pajaro = Object.create(Bird)
console.log(pajaro.getWeight)
