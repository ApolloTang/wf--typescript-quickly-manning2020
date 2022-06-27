// File: p062a-class-implements-multiple-interfaces.ts

interface MotorVehicle {
  startEngine():             boolean;
  stopEngine():              boolean;
  brake():                   boolean;
  accelerate(speed: number): void;
  honk(howLong: number):     void;
}

interface Flyable {
  fly(howHeight: number):    void;
  land():                    void;
}

interface Swimable {
  swim(howFar: number):    void;
}


class Car implements MotorVehicle, Flyable, Swimable {
  startEngine():             boolean { return true; }
  stopEngine():              boolean { return true; }
  brake():                   boolean { return true; }
  accelerate(speed: number): void    { console.log(`Driving faster`); }
  honk(howLong: number):     void    { console.log(`Beep beep yeah!`) };

  fly():                     void {console.log('can fly')}
  land():                    void {console.log('can land')}
  swim():                    void {console.log('can land')}

  public brand:              string
  constructor(brand:string) { this.brand = brand}
}

const car1 = new Car('Toyota');

export {}
