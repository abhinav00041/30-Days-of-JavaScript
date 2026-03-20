// Title: To Be Or Not To Be
            // Difficulty: Easy
            // Language: JavaScript
            // Link: https://leetcode.com/problems/to-be-or-not-to-be/

var expect = function(val) {
  return {
    toBe: (val2) => {
      if(val === val2) return true
      else throw new Error("Not Equal");
    },
    notToBe: (val2) => {
      if (val !== val2) return true;
      else throw new Error("Equal");
    }
  };
};

 
