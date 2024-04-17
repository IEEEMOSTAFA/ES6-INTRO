function add(num1, num2 ){
    return num1 + num2;
}
const result = add (5, 6); // 11

console.log('result', result);

// function expression
const add2 = function(a,b){
    return a + b;
}
// same style with arrow function
const add3 = (a,b) =>  a + b;
const sum = add2(1, 2); // 
console.log('sum', add3(5,6));

// style - 1
const add4 = (num1, num2,num3) => { return num1 + num2 + num3};
console.log('add4', add4(10,20,30));
//  style - 2
const add5 = (num1, num2,num3) =>  num1 + num2 + num3;
console.log('add5', add5(10,20,30));