const actor = {
    name : 'Ananata',
    age  : 25,
    phone : '+62 8123 4567',
    money : 10000
}
// const phone = actor.phone;
// const age = actor.age;
// console.log(phone);
// console.log(phone);
// console.log(phone);
// console.log(phone);
// console.log(phone);
// console.log(age);
// if right side is an object left side of destructuring will be object as well
//  use property name as a variable that contains the property value
// const {phone} = actor;
const {phone,age : boyos} = actor;
console.log(actor);


// array destructing
const numbers = [45,99];
const [first,second] = numbers;
const [x,y] = [12,66];

// Advance
function doubleThem(a,b){
    return [a*2,b*2];
}
const [pro,ditio] = doubleThem(6,9);
console.log(pro,ditio);


