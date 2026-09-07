//Generics let you write the code with any data type


//not generic
function getString(name:String) :String
{
    return "Amit";
}

getString("Swati");

//it will not work
//getString(123);


//*******Generic*************
function getFirstResult<T>(result:T[])
{
    return result[0]!;
}

let firstNumber=getFirstResult<number>([200,400,500]);
let firstString=getFirstResult<string>(["Login","Signup","Addtocart"]);
let firstBoolean=getFirstResult<boolean>([true,false]);

console.log("FirstNumber is:" +firstNumber);
console.log("FirstString is:" +firstString);
console.log("FirstBoolean is:" +firstBoolean);