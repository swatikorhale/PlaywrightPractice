//without function-Repeated same step
let score1=85;
let result1=score1>=70?'pass':'fail';
console.log(result1);

let score2=50;
let result2=score2>=70?'pass':'fail';
console.log(result2);

//With Function
//defining
function getResult(score)
{
    return score>=70?'pass':'fail';
}

//calling
console.log(getResult(90));
console.log(getResult(30));



