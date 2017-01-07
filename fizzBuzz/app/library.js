'use strict'

module.exports = {
 
 fizzBuzz: function(num) {
   //var min, max;
   if ((num % 3 == 0) && (num % 5 == 0)) {
   	return "FizzBuzz";
   }
   else if (num % 5 == 0) {
   	return "Buzz";
   }
   else if (num % 3 == 0) {
   	return "Fizz";
   }
   else {
   	return num;
   }
 }  

}