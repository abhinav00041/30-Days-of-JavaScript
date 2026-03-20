// Title: Add Two Promises
            // Difficulty: Easy
            // Language: JavaScript
            // Link: https://leetcode.com/problems/add-two-promises/

 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
     let P1 = await promise1;
     let P2 = await promise2;
    return new Promise(resolve => {
          resolve(P1+P2);
    })
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 * @param {Promise} promise2
 * @param {Promise} promise1
/**
            promise1.then(promise2)
