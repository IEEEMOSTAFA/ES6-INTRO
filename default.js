// default  ---> if value is not provided then default value is used for the missing value.
function add(num1, num2 = 0){
    const result = num1 +  num2;   
     return result;
}
// const sum = add(10, 20);
const sum = add(10,20);
console.log(sum);


function fullName(first, last =''){
    const full = first + ' '+last; 		  
      return full;

}
let  name = fullName('al');
console.log(name);
// function person(human = {}){

// }
// function person(human = {}){
    
// }