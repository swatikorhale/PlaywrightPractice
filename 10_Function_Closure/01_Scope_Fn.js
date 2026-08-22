//Scope in function

let env="Staging"     //global scope

function setupConfig()
{
    let timeOut=3000;             //local scope
    console.log(env)              //can access global
    console.log(timeOut);         //can access local
}

setupConfig();
console.log(env)    //can access
console.log(timeOut);        //cannot access local