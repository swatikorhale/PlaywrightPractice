//Map->transform An array into a new array of same size
let scores=[45,82,91,60,73];
let grades=scores.map(s=>s>70 ? "pass":"fail");
console.log(grades);
//[ 'fail', 'pass', 'pass', 'fail', 'pass' ]


//filter
let passed=scores.filter(s=>s>70);
console.log(passed);       //[ 82, 91, 73 ]


let failed=scores.filter(l=>l<50);
console.log(failed);               //[45]