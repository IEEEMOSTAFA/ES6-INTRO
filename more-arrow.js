const difference = (x,y) => x - y;
const multiply = (first,second,third) => first + second + third;
// single parameter or one parameters
const getAge = (person) => person.age;
const student = {name: 'sk', age : 23}
const age = getAge(student);
console.log(age);

 const getThird = numbers => numbers[2];
 const third = getThird([5,9,88,2,13]);
 console.log(third);

 const doubleIt = num => num * 2;

//  no parameter
const getPI = () => Math.PI;
console.log(getPI());

// large arrow function
const doMath = (x,y,z) => {
    const sum = x + y + z;
    const mul = x * y * z;
    const result = sum + mul;
    return result;
}