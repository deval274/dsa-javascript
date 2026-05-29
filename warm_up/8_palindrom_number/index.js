function palindrom(x) {
    let final = x;
    if (x < 0) return false;
    let reverse = 0;
    while (x > 0) {
        reverse *= 10;
        let remain = x % 10;
        reverse = reverse + remain;
        x = Math.floor(x / 10);
    }
    console.log(reverse)
    if (reverse === final) return true;
    else return false;
};

function palindrom2(x) {
    let final = x;
    if (x < 0) return false;
    let reverse = 0;
    while (x > 0) {
        let remain = x % 10;
        reverse = (10*reverse) + remain;
        x = Math.floor(x / 10);
    }
    console.log(reverse)
    if (reverse === final) return true;
    else return false;
};

function palindrom3(x) {
    let xCopy = x;
    let reverse = 0;

    while (x > 0) {
        let remain = x % 10;
        reverse = (10 * reverse) + remain;
        x = Math.floor(x / 10);
    }
    return reverse === xCopy
};

console.log(palindrom3(0))
console.log(palindrom3(121))
console.log(palindrom3(123))
