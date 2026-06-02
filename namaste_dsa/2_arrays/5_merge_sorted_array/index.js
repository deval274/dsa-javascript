/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// optimized 1st approach
var merge = function(nums1, m, nums2, n) {
    let p1=m-1;
    let p2=n-1;
    for(let i=nums1.length-1;i>=0;i--){
        if(p2<0) break;
        if(p1>=0 && nums1[p1]>nums2[p2]){
            nums1[i]=nums1[p1]
            p1--;
        }
        else{
            nums1[i]=nums2[p2]
            p2--;
        }
    }
};

// 1st approach
var merge = function(nums1, m, nums2, n) {
    let p1=m-1;
    let p2=n-1;
    for(let i=nums1.length-1;i>=0;i--){
        if(p1<0 || (p2>=0 && nums1[p1]<nums2[p2])){
            nums1[i]=nums2[p2]
            p2--;
        }
        else{
            nums1[i]=nums1[p1]
            p1--;
        }
    }
};

// 2nd approach
var merge = function(nums1, m, nums2, n) {
    let copy = nums1.slice(0,m);
    let i=0;
    let j=0;
    for(let k=0;k<nums1.length;k++){
        if(j>=n || (i<m && copy[i]<=nums2[j])){
            nums1[k]=copy[i];
            i++;
        }
        else{
            nums1[k]=nums2[j];
            j++;
        }
    }
    return nums1;
};