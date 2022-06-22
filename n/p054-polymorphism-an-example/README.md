# Polymorphism

In the following we iterate through Person type, but Person type can be Employee type or Contractor type, and their promote method has different implementation.  This is an example of **polymorphism**

```typescript
const workers: Person[] = [];

workers[0] = new Employee('John');
workers[1] = new Contractor('Mary');

workers.forEach(worker => worker.promote());
```

