
class Base {
  someMethod(): void {
    console.log('someMethod on Base')
  }
}

class Derived extends Base {
  someMethod(): void { // this override base's method
    console.log('someMethod on Derived')
  }
}

const o = new Derived()
o.someMethod()



class Derived2 extends Base {
  someMethod(): void {
    super.someMethod()
  }
}
const o2 = new Derived2()
o2.someMethod()

export {}
