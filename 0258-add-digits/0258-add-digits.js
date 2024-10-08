/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
   if (num < 10) return num;
   const numString = num.toString();
   const numArray = numString.split('');
   let sum = 0;
   
   for (let i = 0; i < numArray.length; i++) {
       sum = sum + parseInt(numArray[i]);
   }
   
   return addDigits(sum);
};
