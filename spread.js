const max = Math.max(6,23,45,1,89,23);
const numbers = [3,5,2,45,5,23,90,32,15];
const arrayMax = Math.max(numbers);
// console.log(...numbers);
console.log(max)

// Use Spread Operator to Copy
const nums = [4,5,38,99,0];
const nums2 = nums;
nums2.push(12);
console.log(nums2);
nums.push(10);
console.log(nums2);

const sonkha = [...nums,999] // add extra element while copy.
console.log(sonkha);