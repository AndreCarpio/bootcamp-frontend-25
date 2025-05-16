// Create a base class Vehicle with:
// Properties: brand
// , model, year
// Method: getInfo() – returns a string like "2022 Toyota Corolla"
// Create a subclass Car that extends Vehicle:
// Additional property: numDoors
// Override getInfo() to include door count:
// Example: "2022 Toyota Corolla with 4 doors"
// Create a subclass Motorcycle that also extends Vehicle:
// Additional property: hasSidecar (boolean)
// Override getInfo() to indicate if it has a sidecar.
// Create instances of Car and Motorcycle, and call getInfo() on them.


class Vehicle {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    getInfo() {
        return `${this.year} ${this.brand} ${this.model}`
    }
}

class Car extends Vehicle {
    constructor(brand, model, year, numDoors) {
        super(brand, model, year)
        this.numDoors = numDoors
    }
    getInfo() {
        return `${this.year} ${this.brand} ${this.model} with ${this.numDoors} doors`
    }
}

class Motorcycle extends Vehicle {
    constructor(brand, model, year, hasSidecar) {
        super(brand, model, year)
        this.hasSidecar = hasSidecar
    }
    getInfo() {
        return `sideCar: ${this.hasSidecar}`
    }
}

let c = new Car("Toyota", "Corolla", 2022, 4)
console.log(c.getInfo())
let m = new Motorcycle("Yamaha", "MT-07", 2022, true);
console.log(m.getInfo())