/**
 * Maria's Homework
 * Week 1 - Day 1
 */

// Problem 1
/**
 * 2 == "2";        //True
 * "he" == "she";     //False
 * 2 === 2;             //True
 * "true" == true;      //True
 * true === true;       //True
 * "true" != true;      //True
 * "true" !== true;      //True
 */

//Problem 2
/**
 * What are the three different ways you can declare a variable? And what is the differences
 * between them?
 *
 * var = has a global scope which means it can be accessed anywhere in the program. (never use because it can cause problems since it can be reassigned)
 * const = is locally scoped and can't be reassigned.
 * let = is locally scoped and it can be reassigned.
 */

//Problem 3

/**
 * First-Class Function (means it's assigned to a variable)
 * const helloWorld = () {
 * }
 *
 * Higher-Order Function (is a function that can accept another function as an argument)
 * *Callback function
 * const anotherNum = () {
 * }
 *
 * const num = anotherNum => {
 *      anotherNum()            <------ This is my callback function
 * }
 */

//Problem 4
/**
 * const a = 'hi';
 * console.log(c);          <------- cannot be accessed because (c) is in a different scope (undefined)
 *
 * const someFunction = (arg) => {
 * const b = 'bye';
 *
 *  if (arg) {
 *    const c = 'see ya!';
 *      console.log(a);       <------- can be accessed because (a) is globally scoped variable
 *      console.log(b);       <------- can be accessed because we're going inside out and they're both inside the same function
 * }
 */

//Problem 5
/**
 * const someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 *
 * For statement
 * for(let i = 0; i < someArray.length; i++) {
 *  console.log(someArray[i])
 * }
 *
 * For…of
 * for(anArray of someArray){
 *   console.log(anArray)
 * }
 */
