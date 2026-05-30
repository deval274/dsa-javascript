/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs)
{
    strs.sort();
    let i=0;
    let length = strs.length;
    let result = ""

    while(i<strs[0].length)
    {
        if(strs[0][i]===strs[length-1][i]){
            result += strs[0][i];
        }
        else{
            break;
        }
        i++;
    }
    return result;
}