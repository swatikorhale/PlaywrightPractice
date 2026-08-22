//TDZ

let a="Swati";     //Global Scope
if(true)
{                    //Block scope
    console.log(a);   //a=TDZ, variable exist but not initialized so reference error  
    let a="Bharath";
}


//Ans:
//ReferenceError: Cannot access 'a' before initialization
