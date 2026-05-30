// write a function that accept an age and return if the person id eligible for voting or not

function isEligibleForVoting(age){
    // return age>=18 ? "You are eligible for voting" : "You are not eligible for voting";
    if (age < 0) {
        return "Invalid input";
    }
    else if (age >= 18) {
        return "Eligible for vote";
    }
    else {
        return "Ineligible for vote"
    }
}

console.log(isEligibleForVoting(18));
console.log(isEligibleForVoting(12));
console.log(isEligibleForVoting(-3));


// create function that check the number is even or odd

function isEvenOrOdd(number) {
    if (number % 2 == 0) {
        return "number is even";
    }
    else {
        return "number is odd"
    }
}

console.log(isEvenOrOdd(2));
console.log(isEvenOrOdd(3));


