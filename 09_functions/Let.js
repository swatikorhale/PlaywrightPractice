//Let-Block scoped

let a=10;
console.log(a);      //Global scope

function printHello()
{
    console.log("Hello")
    let a=20;               //Local scope
    console.log(a);

    if(true)         
    {
        let a=30;           //this 30 value is only for this if scope
        console.log(a);
    }
    console.log(a);       //20
}

printHello();