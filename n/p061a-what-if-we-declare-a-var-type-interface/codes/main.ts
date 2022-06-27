// File: p061a-what-if-we-declare-a-var-type-interface/main.ts

interface MotorVehicle {
  startEngine():             boolean;
  stopEngine():              boolean;
  brake():                   boolean;
  accelerate(speed: number): void;
  honk(howLong: number):     void;
}


class Car implements MotorVehicle {
  startEngine():             boolean { return true; }
  stopEngine():              boolean { return true; }
  brake():                   boolean { return true; }
  accelerate(speed: number): void    { console.log(`Driving faster`); }
  honk(howLong: number):     void    { console.log(`Beep beep yeah!`) };

  // The following does not exist in the interface:
  constructor(brand:string) { this.brand = brand}
  fly():                     void {console.log('can fly')}
  public brand:              string
}

const car1 = new Car('Toyota');
car1.fly();
car1.brand;


// In the following we have declare the variable car2 as type MonorVehicle
// In this case the method 'fly' and 'brand' is not available on car2,
// because they are not specified in type MotorVehicle:
const car2: MotorVehicle = new Car('Tesla')
car2.fly()
//   ~~~~~ Error Property 'fly' does not exist on type 'MotorVehicle'.
car2.brand;
//   ~~~~~ Error Property 'brand' does not exist on type 'MotorVehicle'.

export {}
