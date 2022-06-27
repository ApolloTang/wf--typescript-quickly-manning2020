// File: p062b-class-extends-n-implements.ts

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


class Car implements MotorVehicle {
  startEngine():             boolean { return true; }
  stopEngine():              boolean { return true; }
  brake():                   boolean { return true; }
  accelerate(speed: number): void    { console.log(`Driving faster`); }
  honk(howLong: number):     void    { console.log(`Beep beep yeah!`) };

  public brand:              string
  constructor(brand:string) { this.brand = brand}
}

class SecretServiceCar extends Car implements Flyable, Swimable {
  startEngine():             boolean { return true; }
  stopEngine():              boolean { return true; }
  brake():                   boolean { return true; }
  accelerate(speed: number): void    { console.log(`Driving faster`); }
  honk(howLong: number):     void    { console.log(`Beep beep yeah!`) };

  fly():                     void {console.log('can fly')}
  land():                    void {console.log('can land')}
  swim():                    void {console.log('can land')}
}


const car1 = new Car('Toyota');

const secretServiceCar1 = new SecretServiceCar('007');
secretServiceCar1.fly()

export {}
