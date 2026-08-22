//spread operator(...)
let original=[1,2,3];
let copy1=[...original];
console.log(copy1);       //[ 1, 2, 3 ]

//slice
let copy2=original.slice();
console.log(copy2);        //[ 1, 2, 3 ]

//from
let copy3=Array.from(original);
console.log(copy3);        //[ 1, 2, 3 ]

//concat
let copy4=original.concat();
console.log(copy4);         //[ 1, 2, 3 ]

//deep copy-original will also change
let deep_copy=original;
deep_copy.push(91);
console.log(original);     //[ 1, 2, 3, 91 ]
console.log(deep_copy);    //[ 1, 2, 3, 91 ]