const age: number = 25; //10241.ts:4:1 - error TS2588: Cannot assign to 'age' because it is a constant.
let Name: string = "Alice";

age += 1;
Name = "Bob";

console.log(age); // 26
console.log(Name); // Bob