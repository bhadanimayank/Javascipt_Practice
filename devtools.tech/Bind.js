/*

What is the output of the following code snippet? | JavaScript Bind Output Based Questions
@Yomesh Gupta


var foo = 1;
var change = () => {
  this.foo = 2;
  console.log(this.foo);
};
var obj = {
  foo: 3
};
var bounded = change.bind(obj);

// What would be the output of the following?
console.log(foo);
console.log(change());
console.log(foo);
console.log(obj.foo);
console.log(bounded());
Option 1
1
2
2
3
2
Option 2
1
2
1
3
3
Option 3
1
2
2
2
3
Option 4
1
1
2
3
1


*/

Option 1
YOUR ANSWER
CORRECT ANSWER
1
2
2
3
2

/*
Editorial
Arrow functions always take up the definition scope, not the calling scope. Therefore, .bind doesn't work with them.

For useful and amazing frontend and programming tutorials: https://bit.ly/devtools-yt

*/
