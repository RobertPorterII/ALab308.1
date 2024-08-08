// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

//   Part 1 LAb

//  question 1 Check if all numbers are divisible by 5. 
  const divideByFive = n1 % 5 === 0  || n2 % 2 === 0 || n3 % 2 === 0 || n4 % 2 === 0;

  //  console.log(divideByFive) result is True all numbers can be divided by 5 

  //  question 2 Check if the first number is larger than the last. 
  const firstBigger = n1 > n4

  // console.log(firstBigger) results True the first number n1 is larger then the last number n4

  // question 3 Accomplish the following arithmetic chain

  const mathChain = (n1 - n2) * (n3) / (n4) 

  // console.log(mathChain) results of the chain is -20

  // question 4 Change the way that isOver25 calculates so that we do not need to use the NOT operator
   
  // not really sure on that one

  // Part 2: Road TRip
  // The distance for the trip is 1500 miles and budget of 175 our fixed so they will be  a const

const distance = 1500 
const budget = 175

// next set a variables we calculate how many hours to get to the const based on the 3 speeds in the example
let x1 = 55 
let x2 = 60 
let x3 = 75 

distance / x1 // 27.272727272727273 hours
distance / x2 // 25 hours
distance / x3 // 20 hours

// next calculate how many gallons of gas you will need to get to the const

let y1 = 30 // miles per gallon 
let y2 = 28 // miles per gallon
let y3 = 23 // miles per gallon

distance / y1 // 50 gallons
distance / y2 // 53.5714285 gallons
distance / y3 // 65.2173913 gallons

// next set is to calculate the cost of gallons at 3$ per
(distance / y1) * 3 // 150 dollars
(distance / y2) * 3 // 160.714285 dollars
(distance / y3) * 3 // 195.652173 dollars

// How many gallons of fuel will you need for the entire trip? 50 gallons driving at 55 miles per hour, 53.57 driving at 60 and 65.21 gallons driving at 75

 // Will your budget be enough to cover the fuel expense? Driving at either 55 or 60 miles an hour will keep you within your fuel budget 

// How long will the trip take, in hours? 27.27 hours at 55mile per hour, 25 hours at 60 miles per hour, and 20 hours driving at 75 miles per hour


// Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?

// Based on results of both fuel costs and travel time I believe trip is best taken driven at a speed of 60 miles per hour