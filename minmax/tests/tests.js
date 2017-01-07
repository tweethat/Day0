(function() {
  'use strict';

  var chai = require('jasmine');

  var myApp = require('../app/library.js');

  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(myApp.findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(myApp.findMinMax([6, 4])).toEqual([4, 6]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(myApp.findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });

      it('should return [-1, 7] for [4, 0, 7, 6, -1, 2]', function () {
        expect(myApp.findMinMax([4, 0, 7, 6, -1, 2])).toEqual([-1, 7]);
      });

      it('should return [-7, -1 ] for [-4, -5, -7, -6, -1, -2]', function () {
        expect(myApp.findMinMax([-4, -5, -7, -6, -1, -2])).toEqual([-7, -1]);
      });

      it('should return [-7, 0 ] for [-4, -5, -7, -6, 0, -2]', function () {
        expect(myApp.findMinMax([-4, -5, -7, -6, 0, -2])).toEqual([-7, 0]);
      });


    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(myApp.findMinMax([4, 4, 4, 4])).toEqual([4]);
      });

      it('should return [-5] for [-5, -5, -5, -5]', function () {
        expect(myApp.findMinMax([-5, -5, -5, -5])).toEqual([-5]);
      });

    }); 

    describe('Return empty list for empty list supplied',function () {

      it('should return [] for []',function () {
        expect(myApp.findMinMax([])).toEqual([]);
      });

      it('should return true for typeof if input is an array',function (){
        expect(myApp.isArray([])).toEqual(true);
      });

    });

  });

})();