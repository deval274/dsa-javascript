/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let copy = x;
    let rev = 0;
    x = Math.abs(x);
    while(x>0){
        let last = x%10;
        rev = (10*rev) + last;
        x = Math.floor(x/10);
    }
    // let limit = Math.pow(2,31);
    let limit = 2**31;
    if(rev < -limit || rev > limit-1) return 0;
    return (copy<0) ? -rev : rev
};