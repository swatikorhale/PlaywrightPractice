//normal function
function greet(name1)
{
    return `Hello, ${name1}`;
}

//Function as Expression
const greet1= function(name2)
{
   return `Hello, ${name2}`;
}

console.log(greet("Bob"));
console.log(greet1("Bob"));