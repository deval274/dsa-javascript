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