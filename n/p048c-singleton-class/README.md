# Singleton Class

In this pattern, AppState store date representing the current state of a application.  It is a **single source of truth** (singleton) and it can not be instantiate: 

```typescript

class AppState {
  private constructor() {}

  public counter = 0;  // the app state

  private static _instanceRef: AppState
  public static getInstance(): AppState {
    if (AppState._instanceRef === undefined) {
      AppState._instanceRef = new AppState()
    }
    return AppState._instanceRef
  }
}

// const appState = new AppState(); // error because of the private constructor

const appState1 = AppState.getInstance()
const appState2 = AppState.getInstance()

console.log(++appState1.counter) // 1
console.log(++appState2.counter) // 2
console.log(appState1.counter)   // 2


export {}
```

