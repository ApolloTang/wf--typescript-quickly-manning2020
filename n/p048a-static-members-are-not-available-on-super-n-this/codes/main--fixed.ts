
class CounterBase {
  public static count = 10

  public incCountBase () {
    CounterBase.count++
    console.log('inCount in Base: ', CounterBase.count)
  }
}


class CounterDerived extends CounterBase{
  public incCountDerived () {
    CounterBase.count++
    console.log('inCount in Derived: ', CounterDerived.count)
  }
}

const counterDerived1 = new CounterDerived()
counterDerived1.incCountDerived()   // 11
counterDerived1.incCountBase()      // 12

const counterBase1 = new CounterBase()
counterBase1.incCountBase()         // 13

const countDerived2 = new CounterDerived()
countDerived2.incCountDerived()     // 14
countDerived2.incCountBase()        // 15

const countBase2 = new CounterBase()
countBase2.incCountBase()           // 16

export {}
