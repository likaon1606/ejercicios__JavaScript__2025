// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.
const nums = [2,7,11,15] // 13
0, 1, 2

for(let i = 0; i < nums.length; i++) {  
  for(let j = i + 1; j < nums.length; j++) {
    
    if(i !== j && nums[i] + nums[j] === 9){
      console.log([nums[i], nums[j]]);
      
    }   
  }
}

//? *** usando un solo for*****

const nums2 = [2, 7, 11, 15];
const objetivo = 9;
const vistos = {};

for (let i = 0; i < nums2.length; i++) {
  const complemento = objetivo - nums2[i];
  
  if (vistos[complemento] !== undefined) {
    console.log([complemento, nums2[i]]);
  }
  vistos[nums2[i]] = i;
}

