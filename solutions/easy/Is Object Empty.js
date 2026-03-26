// Title: Is Object Empty
            // Difficulty: Easy
            // Language: JavaScript
            // Link: https://leetcode.com/problems/is-object-empty/

/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    if(JSON.stringify(obj).length<=2){
        return true;
    }
    else return false
};
