// Car constructor function
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Method added to Car prototype to get make and model
Car.prototype.getMakeModel = function() {
  return `${this.make} ${this.model}`;
}

// SportsCar constructor function inheriting from Car
function SportsCar(make, model, topSpeed) {
  Car.call(this, make, model);
  this.topSpeed = topSpeed;
}

// Inherit Car prototype in SportsCar prototype
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Method added to SportsCar prototype to get top speed
SportsCar.prototype.getTopSpeed = function() {
  return this.topSpeed;
}

// Example usage:
const car = new SportsCar("Ferrari", "Testarossa", 200);
console.log(car.getMakeModel()); // Output: Ferrari Testarossa
console.log(car.getTopSpeed()); // Output: 200

// Export the classes
window.Car = Car;
window.SportsCar = SportsCar;
