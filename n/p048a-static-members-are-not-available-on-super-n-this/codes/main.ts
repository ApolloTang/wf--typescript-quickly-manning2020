
class CounterBase {
  public static count = 10

  public incCountBase () {
    this.count++
    //   ~~~~~
    // error| [tsserver 2576] Property 'count' does not exist
    // on type 'CounterBase'. Did you mean to access the static
    // member 'CounterBase.count' instead?
  }
}


class CounterDerived extends CounterBase{
  public incCountDerived () {
    super.count++
    //    ~~~~
    // error| [tsserver 2576] Property 'count' does not exist on
    // type 'CounterBase'. Did you mean to access the static member
    // 'CounterBase.count' instead?
  }
}

export {}


