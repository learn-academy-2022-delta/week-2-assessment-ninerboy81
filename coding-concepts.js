// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Delta 2022"
console.log(cohort.split(""))

// a) Your answer: .split() should return a string that has placed a space between each letter of the string
// b) Verify and explain: Using .split returned an array of strings containing the letters of the string. All the letters were separated into their own strings.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: This will return Hello, LEARN Student! because using string interpolation along with ${} the string "LEARN Student" was inserted into the string "Hello, "
// b) Verify and explain: What i got back was undefined. The function was declared with a parameter, but (name) was never assigned a value.


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
console.log(multBy2)

// a) Your answer: Using .map() should return an array of numbers that have been multiplied by 2 giving the answer of [8, 10, 12, 14, 16]
// b) Verify and explain: Since the array was created with the numbers 4, 5, 6, 7, 8, the numbers were multiplied by 2 and the result was placed in the array.


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: Starting with an array and using .filter() as well as modulo 2 !== 0 should return an array of numbers that have been filtered to only include odd numbers.
// b) Verify and explain: An array with numbers using .filter() with syntax value of modulo 2 !== 0 means that if it is divisible by 2 then it will be not show up in the array.


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: Calling myCodingSkills.languages[0] should return JavaScript since it is the first element in the array.
// b) Verify and explain: Using .languages[0] means that you are calling the first indexed element in the array because of [0].


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Bravo",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: This will return "George" , "Bravo", and 2022 since the constructor has nested student, cohort, and year and we used "George" with "new" in the variable learnStudent.
// b) Verify and explain: So i missed that each "this."" included an "=" meaning that the return would have student:, cohort:, and year:.
