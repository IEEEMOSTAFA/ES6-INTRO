// const glass = { name: 'glass',
// color:'blue',
// price: 12,
// isCleaned: true
// };
// console.log(glass);


// const keys = Object.keys(glass);
// console.log(keys);
// // [ 'name', 'color', 'price', 'isCleaned' ]
// const values = Object.values(glass);
// console.log(values);
// // [ 'glass', 'blue', 12, true ]

// const entries = Object.entries(glass);
// console.log(entries);

// delete :
// console.log(glass);

// // delete glass.isCleaned;   
// console.log(glass);
// critical way:
// const {isCleaned, ...rest} = glass;
// console.log(glass);

const mog = { name: 'glass',
color:'blue',
price: 12,
isCleaned: true
};
// // Object.freeze(mog);
// mog.source = 'Bangladesh'
// mog.price = 6000;
// delete mog.name;
// console.log(mog);
// -------------------------------
Object.seal(mog);
mog.source = 'Bangladesh'
mog.price = 6000;
delete mog.name;
console.log(mog);