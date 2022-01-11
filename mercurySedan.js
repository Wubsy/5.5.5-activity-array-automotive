//this includes the vehicle class as a module
import Vehicle from "./vehicleBaseClass.js"


//this shows how to call from this module...
let v = new Vehicle("Mercury", "Sedan", "1965", "color", "30001");

console.log(v)

class Car extends Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maxPassengers = 5
        this.passenger = 0
        this.numberOfWheels = 4
        this.maxSpeed = 160
        this.fuel = 10
        this.availableRoom = false
        this.timeForMaintenance = false
    }

    loadPassenger(num) {
        if (this.passenger < this.maxPassengers) {
            if ((num + this.passenger) <= this.maxPassengers) {
                this.passenger += num
            } else {
                console.log("Car would be more than full")
            }
        } else {
            console.log("Car is already full")
        }
        return this.passenger
    }

    start() {
        if (this.fuel > 0) {
            return this.started = true
        }
        return this.started
    }

    scheduleService(mileage) {
       return this.timeForMaintenance = mileage > 30000
    }
}

let mercurySedan = new Car("Mercury", "Sedan", "1965", "color", "30001");
console.log(mercurySedan)
console.log("start "+mercurySedan.start())
mercurySedan.accelerate()
mercurySedan.accelerate()
console.log("speed "+mercurySedan.speed)

console.log("PassCount "+mercurySedan.loadPassenger(1)) //Should update passenger count to 1
console.log("PassCount "+mercurySedan.loadPassenger(5)) //Car would be at 6, passing max passengers by 1, should be at 1
console.log("PassCount "+mercurySedan.loadPassenger(4)) //Car should be at 5, reaching max passengers
console.log("Needs service: "+mercurySedan.scheduleService(mercurySedan.mileage))
