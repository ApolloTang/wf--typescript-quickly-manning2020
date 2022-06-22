
class CannotInstantiate {
  private constructor() {

  }
}

const c = new CannotInstantiate()
//        ~~~~~~~~~~~~~~~~~~~~~~~
//        error| [tsserver 2673] Constructor of class 'CannotInstantiate'
//        is private and only accessible within the class declaration. [E]


export {}
