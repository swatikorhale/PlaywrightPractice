//TDZ-TDZ is the time between entering a block and initializing a `let` or `const` variable.
//  During this time, the variable exists but cannot be accessed.


{
    console.log(a);
    let a = 10;
}

//ReferenceError: Cannot access 'a' before initialization


//for hoisting with var it will give undefined but with TDZ with let it will give error
