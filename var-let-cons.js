// var : no reason to use it
// let : allow it to reassign
// const : do not allow it to reassign


const money  = 40;
// money = 50;
const rich = money + 25;
console.log(rich);

const numbers = [23,4,23,12,56];
console.log(numbers);
numbers[1] = 55;
console.log(numbers);
numbers.push(8,9,65);
console.log(numbers);

// Objects
let student = { name: 'John',
            class: 12 
            
        
        };

console.log(student);  
student = { name: 'Roki',
            class: 22 
            
        
        }; 
        
console.log(student);    

   
