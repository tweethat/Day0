'use strict'

module.exports = {


 
 findMinMax: function(oldArray) {
   var min, max;
   var newArray = [];

   if (oldArray.length == 0) {
   	return newArray;
   }
   else if (oldArray !== []) {
   	oldArray.sort(function(a,b) {return a - b});
   	min = oldArray[0];
   	newArray.push(min);
  	max = oldArray[(oldArray.length - 1)];
  	if (min == max){
  		return newArray
  	}
  	else {
  		newArray.push(max);
   		return newArray;
  	}
 	 	  
   }
      
 },
 isArray: function(oldArray){
   	return oldArray instanceof Array
   	//oldArray.constructor.tostring().indexof("Array") > -1;
   }
}