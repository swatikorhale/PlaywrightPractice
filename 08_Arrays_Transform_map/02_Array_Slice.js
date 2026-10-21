//Array Slicing-
//Notes
// slice(start, end)
// ✔ Returns a NEW array.
// ✔ Does NOT modify (mutate) the original array.
// ✔ start index is included.
// ✔ end index is excluded.
// ✔ Array indexing starts from 0.
// ✔ If 'end' is omitted, it returns elements from 'start' to the end of the array.

let arr=[1,2,3,4,5];

 //slice(start, end) — returns new array, does NOT mutate actual -> ( start, end-1) 
console.log(arr.slice(1,3));   //[ 2, 3 ]

//Don't give the end, it will automatically take from start to end.
console.log(arr.slice(2));    //[ 3, 4, 5 ]
console.log(arr.slice(-2));   //[ 4, 5 ]
console.log(arr.slice(-4));   //[ 2, 3, 4, 5 ]
console.log(arr.slice(0));    //[ 1, 2, 3, 4, 5 ]

