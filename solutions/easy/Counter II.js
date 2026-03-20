// Title: Counter II
            // Difficulty: Easy
            // Language: JavaScript
            // Link: https://leetcode.com/problems/counter-ii/

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let counter = init
   return{
    increment:()=>{
        return ++counter
    },
    reset:()=>{
        counter = init
        return counter
    },
    decrement:()=>{
        return --counter
    }
