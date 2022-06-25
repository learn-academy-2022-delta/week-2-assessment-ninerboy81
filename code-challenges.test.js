// ASSESSMENT 2: Coding Practical Questions with Jest


// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

//const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
//const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.
//
//
//
//
//
//
//
//
//
//
//
//


// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

//pseudo code:
// declare a function called evenDiv that takes in a number
// set a parameter called odd
// use if statement to check if odd is divisible by 3 using modulo % 3 === 0
// if it is, return the string "is divisible by three"
// if it is not, return the string "is not divisible by three"

describe("evenDiv", () => {
    it("should return true if number is evenly divisble by three", () => {
        const num1 = 15
        // Expected output: "15 is divisible by three"
        const num2 = 0
        // Expected output: "0 is divisible by three"
        const num3 = -7
        // Expected output: "-7 is not divisible by three"
        expect(evenDiv(num1)).toEqual("15 is divisible by three")
        expect(evenDiv(num2)).toEqual("0 is divisible by three")
        expect(evenDiv(num3)).toEqual("-7 is not divisible by three")
    })
})

// ReferenceError: evenlyDiv is not defined
  
// b) Create the function that makes the test pass.

const evenDiv = (odd) => {
    if (odd % 3 === 0) {
        return odd + " is divisible by three"
    } else {
        return odd + " is not divisible by three"
    }
}
//
//
//
//
//
//
//
//
//
//
//
//

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

//pseudo code:
// declare a function called capitalize 
// set a parameter called array
// use .map to iterate through the array
// use .charAt to get the first letter of the word using (0) since itll be an array the first letter is index 0
// use .toUpperCase to make the first letter uppercase
// use .slice to bring back the rest of the string starting at 1 since (0) is the first letter then (1) is the second letter


describe("capitalize", () => {
    it("should return an array with all the words capitalized",() => {
        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
        // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
    expect(capitalize(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    expect(capitalize(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
} ) 
})

// ReferenceError: capitalize is not defined


// b) Create the function that makes the test pass.

const capitalize = (array) => {
    return array.map(word => word.charAt(0).toUpperCase() + word.slice(1))
}
//
//
//
//
//
//
//
//
//
//
//
//
//



// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

// pseudo code:
// declare a function called vowelIndex that takes in string
// declare a variable called vowels that has a string called "aeiou" for the vowels
// set a parameter called string
// use for loop to iterate through the string to look for the vowels
// if the vowels includes the string[i] then return the index
// return 

describe ("vowelIndex", () => {
    it("should return the index of the first vowel", () => {
    const vowelTester1 = "learn"
    // Expected output: 1
    const vowelTester2 = "academy"
    // Expected output: 0
    const vowelTester3 = "challenges"
    // Expected output: 2
    expect(vowelIndex(vowelTester1)).toEqual(1)
    expect(vowelIndex(vowelTester2)).toEqual(0)
    expect(vowelIndex(vowelTester3)).toEqual(2)
    }
    )
}
)   

// ReferenceError: vowelIndex is not defined

// b) Create the function that makes the test pass.

const vowelIndex = (string) => {
const vowels = "aeiou"
    for (let i = 0; i < string.length; i++) {
        if (vowels.includes(string[i])) {
            return i
        }
    }
}
