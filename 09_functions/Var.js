var a=10;
console.log(a);

//variable is function scoped
function printHello()
{
    console.log("Hello")
    var a=20;               //20
    console.log(a);

    if(true)
    {
        var a=30;          //30
        console.log(a);
    }
    console.log(a);         //30-->so here it should be 20 as above if condition is limited to that much scope only but it is taking 30 bcz it is function based scope
}

printHello();