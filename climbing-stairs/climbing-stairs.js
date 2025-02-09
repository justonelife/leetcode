const cache = {
  1: 1,
  2: 2,
};

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (cache[n] !== undefined) {
    return cache[n];
  }

  cache[n] = climbStairs(n - 1) + climbStairs(n - 2);

  return cache[n];
};


console.log(climbStairs(2));
console.log(climbStairs(3));
/***
 *N = 1, 2


S1 ‎ =  1
S2 = 2    11; 2
S3 = 3      111; 12; 21;
s4 = 5        1111; 22; 211; 121; 112
s5 = 8          11111; 122; 212; 221; 1112; 1121; 1211; 2111
s6 =      111 111; 111 12; 111 21; 112 11; 121 11; 211 11; 1122; 1221; 2211; 1212; 2112; 2121; 222;
 */
