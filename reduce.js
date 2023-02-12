/**
 * To run this file in Gitpod, use the
 * command node reduce.js in the terminal
 */

// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4];
let sums = nums.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log(sums);

// accumulator represents the value that will ultimately be returned from the
// reduce() method.
// currentValue represents the current array item that the callbackfn is being
// run on.

// A closer look at how it works here:

let sumsCloser = nums.reduce((acc, curr) => {
  console.log(
    "Accumulator: ",
    acc,
    "Current Value: ",
    curr,
    "Total: ",
    acc + curr
  );
  return acc + curr;
}, 0); // <-- initial value specified! Now 5 passes in array(5) with start num.

console.log(sumsCloser);

// Accumulator accumulates the sum of the current values as the function is
// executed on each element.
// 1st pass: acc: 0(nums[0]), curr:1(nums[1]) total: 1(result of acc + curr)
// 2nd pass: acc: 1, curr:2(nums[2]), total: 3(result of acc + curr)
// 3rd pass: acc: 3, curr:3(nums[3]), total: 6
// 4th pass: acc: 6. curr:4(nums[4]), total: 10

// 4 passes in a 5-element array? No initial value specified in the callbackfn!
// It will default to using the first value of the array if none is specified.
// Specify this after the callbackfn body (it is just another arg to pass to the
// reduce() method!)

const teamMembers = [
  {
    name: "Andrew",
    profession: "Developer",
    yrsExperience: 5,
  },
  {
    name: "Ariel",
    profession: "Developer",
    yrsExperience: 7,
  },
  {
    name: "Michael",
    profession: "Designer",
    yrsExperience: 1,
  },
  {
    name: "Kelly",
    profession: "Designer",
    yrsExperience: 3,
  },
];

/*
Other uses for reduce():
- grouping objects by a specific property
- flattening arrays
- counting how many times a value appears in an object or array
*/

// Totaling a specific object property

function getExpArray() {
  let output = [];
  for (let member of teamMembers) {
    output.push(member.yrsExperience);
  }

  // console.log(expArray);
  return output;
}

const expArray = getExpArray();
console.log(expArray);

// Arrow function to get the array of all years of experience:
const arrowExpArray = teamMembers.map((i) => i.yrsExperience);
console.log(arrowExpArray);

// Then reducing this to get the total:
// const totalExperience = arrowExpArray.reduce((acc, curr) => acc + curr, 0);
// console.log(totalExperience);

// LESSON VIDEO SOLUTION:
const totalExperience = teamMembers.reduce(
  (acc, curr) => acc + curr.yrsExperience,
  0
);
console.log(totalExperience);
// SIMPLY ACCESS THE PROPERTY OF THE CURRENT WITH DOT NOTATION!
// Specifying the initial value of 0 necessary otherwise the 'acc' will be the
// first object of the array!

// Grouping by a property, and totaling it too
// Desired output: {Developer: 12, Designer: 4}

// First set of curly braces: callbackfn body
// Second set of curly braces: initial value (what the accumulator will be on
// the first pass and eventual object to be returned.)

// @acc : empty object
// @curr: 1st member of teamMembers array
let expByProfession = teamMembers.reduce((acc, curr) => {
  // define key to assign to empty object
  let key = curr.profession;
  // Check if the key already exists in the object we are going to create.
  // Hint: it doesn't at first so we make it like this:
  if (!acc[key]) {
    acc[key] = curr.yrsExperience;
  } else {
    acc[key] += curr.yrsExperience;
  }
  return acc; // <-- return the accumulator as this is the object's content.
}, {}); // <-- initial value: an empty object!

console.log(expByProfession);
