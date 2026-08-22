//without function-Repeated same step
let score=85;
let result=score>=70?'pass':'fail';
console.log(result);

let score1=50;
let result1=score1>=70?'pass':'fail';
console.log(result1);

//With Function
//defining
function getResult(score)
{
    return score>=70?'pass':'fail';
}

//calling
console.log(getResult(90));
console.log(getResult(30));