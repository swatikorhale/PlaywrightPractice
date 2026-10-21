const greet= (name) => `Hello, ${name}`;
console.log(greet("swati"));

//2nd example
//normal function
function doubleA(a)
{
    return a*2;
}

//arrow
const doubleB=(a) => a*2;
let a=doubleB(10);
console.log(a);

//Multiline
const getResult= (score) =>
{
    if(score>70) return "pass"
    return "fail";
}

console.log(getResult(45))
    