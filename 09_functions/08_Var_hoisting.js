console.log(Greeting);       //undefined
var Greeting="Hello";
console.log(Greeting);       //hello


//internally-Behind the scene
var Greeting;                 //hoisted with undefined
console.log(Greeting);       //undefined
Greeting="Hello";            //Assignment stay in place
console.log(Greeting);       //hello


