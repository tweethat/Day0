'use strict'

module.exports = {
 
 aritGeo: function(inputArray) {
   var ap, gp,exp,diff, n = inputArray.length ;
   if (inputArray.length == 0) {
   	return 0;
   }
   else {
   	ap = inputArray[1] - inputArray[0];
   	gp = inputArray[1] / inputArray[0];

   	for (var ind = 3; ind <= n; ind++) {  //start checking for arithmetic and geometric progression from index 3
   		exp = inputArray[ind] / inputArray[ind - 1];

   		diff = inputArray[ind] - inputArray[ind - 1];

   		if (exp == gp) {
   			return 'Geometric';
   			}
   		else if (diff == ap) {
   			return 'Arithmetic';
   		 		}
   		else {
   			return -1;
   		}
 
   }
}
}
}