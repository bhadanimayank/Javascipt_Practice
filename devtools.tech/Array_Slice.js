/* Problem - https://devtools.tech/questions/s/what-would-be-the-output-of-the-following-code-based-on-array-slice---qid---4GsiLnGEEmLaUaoWb64V?index

Problem

Editorial

Your Submissions
What would be the output of the following code? (Based on Array Slice)
@Devtools Tech


const array = [1,2,3,4,5];

console.log(array.slice(2,4));
Option 1
CORRECT ANSWER
[3, 4]
Option 2
YOUR ANSWER
[3, 4, 5]
Option 3
[2, 3]
Option 4
[1, 2, 3]
Option 5
[2, 3, 4]

*/

Option 1
CORRECT ANSWER
[3, 4]

/*
Editorial
The answer would be Option 1 as the slice method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

*/