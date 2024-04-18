const numbers = [1,6,4,8];
// for(let i = 0;i<numbers.length;i++){}      besi use korbo na
// while

// for(const num of numbers){
//     console.log(num)}


    // const nobab = 'Siraj Ud Doula';
    // for(const char of nobab){
    //     console.log(char);j
    // }
const glass = { name: 'glass',
color:'blue',
price: 12,
isCleaned: true
};
// for(cons key of glass){
//     console.log(key);
// }
// for(const key in glass){
//     console.log(key);
// }
for(const key in glass){
    const value = glass[key];
    console.log(key,value);
}

// 