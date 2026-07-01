const car = {
    brand : "BMW",
    year : 2024,
    describe(){
        return `This car is a ${this.year} ${this.brand}`;
    }
};
console.log(car.describe());
