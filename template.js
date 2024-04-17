// const first = 'jaan'
// const last = 'pakhi'
// const greet = 'potas potas'
// const name = first +' '+ last +' '+ greet;
// console.log(name);

let a = 10;
let b = 20;
let result = 'The Sum of  ' + a + ' and ' + b +' is ' + (a+b);
console.log(result);
// Console.log("Result: " , result);
const math = `The Sum of ${a} and ${b}  is ${a+b}`
console.log(math);

// Template String 
const Challenge = `Md Al Mostafa
You are Welcome to New York
You can stay here for 3 months`;
console.log(Challenge);

const student = { name: 'Mostafa', age: 25, address: 'New York'};
const number = [10,20,30,40];
const sum = `The Sum of ${student.name} and ${number[1]} is ${number[1] + student.age}`
console.log(sum);
