/* Problem - https://devtools.tech/questions/s/how-to-create-a-toggle-function-in-javascript-or-frontend-problem-solving-or-javascript-interview-question---qid---gbucvY2jab4e1q6Fo6iV

How to create a toggle function in JavaScript? | Frontend Problem Solving | JavaScript Interview Question
javascript logo
JavaScript
Beginner
1820
@Devtools Tech


In this question, you need create a function toggle that accepts an array as input and toggles between the values in a cyclic manner.

const animals = ['dog', 'cat', 'elephant', 'tiger', 'lion']; 
const toggled = toggle(animals);

toggled(); // returns dog
toggled(); // returns cat
toggled(); // returns elephant
toggled(); // returns tiger
toggled(); // returns lion
toggled(); // returns dog
...
This question is based on the concept that you might require to build a toggle functionality between two values like on or off in your web-app. A more advanced use-case could be that you need to generate a captcha or a word whenever clicks on a button. You can initialise your code with a list of items and the user would be presented with the next item in the list whenever they click on the button.

Specifications
Input value should be an array with length >= 1.
If input parameter type is not an array then throw a TypeError.
If input array length <= 0 then throw an error.
The toggle function should cycle between the values in clockwise direction.
Your solution should pass all the test cases.

*/

function toggle(list) {
    // DO NOT REMOVE
    'use strict';
  
    // write your solution below
  
    if (!list || !Array.isArray(list)) {
      throw new TypeError(
        'Toggle function can only be called on an Array. Invalid input provided.'
      );
    }
  
    const length = list.length;
  
    if (!length) {
      throw new TypeError('Input array must have atleast one element.');
    }
  
    let currentLength = -1;
  
    function goNext()
    {
      currentLength = (currentLength + 1) % list.length;
      return list[currentLength];
    }
  
    return goNext;
  }