//(function() {

	'use strict';

	var chai = require('jasmine');

	var myApp = require('../app/library.js');

	describe("Fizz Buzz tests", function(){

		it("should return 'Fizz' for numbers divisible by 3", function() {
			expect(myApp.fizzBuzz(3)).toEqual('Fizz');
		});

		it("should return 'Fizz' for negative number divisible by 3", function() {
			expect(myApp.fizzBuzz(-3)).toEqual('Fizz');
		});

		it("should return 'Buzz' for number divisible by 5", function() {
			expect(myApp.fizzBuzz(5)).toEqual('Buzz');
		});

		it("should return 'Buzz' for negative number divisible by 5", function() {
			expect(myApp.fizzBuzz(-5)).toEqual('Buzz');
		});

		it("should return 'FizzBuzz' for 15", function() {
			expect(myApp.fizzBuzz(15)).toEqual('FizzBuzz');
		});

		it("should return 'FizzBuzz' for -15", function() {
			expect(myApp.fizzBuzz(-15)).toEqual('FizzBuzz');
		});

		it("should return 'FizzBuzz' for 45", function() {
			expect(myApp.fizzBuzz(45)).toEqual('FizzBuzz');
		});

		it("should return 'FizzBuzz' for 90", function() {
			expect(myApp.fizzBuzz(90)).toEqual('FizzBuzz');
		});

		it("should return 'Fizz' for 63", function() {
			expect(myApp.fizzBuzz(63)).toEqual('Fizz');
		});

		it("should return 7 since its indivisible by 3 and 5", function() {
			expect(myApp.fizzBuzz(7)).toEqual(7);
		});

		it("should return 101 since its indivisible by 3 and 5", function() {
			expect(myApp.fizzBuzz(101)).toEqual(101);
		});

	});

//});