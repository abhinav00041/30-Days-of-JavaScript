// Title: Cache With Time Limit
            // Difficulty: Medium
            // Language: JavaScript
            // Link: https://leetcode.com/problems/cache-with-time-limit/

 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const ans = key in this.object;
    if(ans){
        clearTimeout(this.object[key].id)
    }
    const timerId  = setTimeout(()=>{
        delete this.object[key]
    },duration)
    this.object[key] = {"value": value,"id":timerId};
    return ans;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    if (key in this.object) return this.object[key].value;
    return -1
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return Object.keys(this.object).length;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
/** 

};
    // this.timeoutIds = {}
    this.object = {}
var TimeLimitedCache = function() {
