//The Nullish Coalescing Operator (??) in JavaScript returns the right-hand value only if the left-hand value is null or undefined.
//let result = value ?? defaultValue;
//If value is null or undefined, it returns defaultValue.


let a=null;
let result=a ?? "Swati";         //a is null so it will return default value swati
console.log(result);

let amul=null;
let result1=amul ?? "Chitale Milk";
console.log(result1);

let api_response=null;
let responseData=api_response ?? "{}";
console.log(responseData);