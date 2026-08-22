let arr=[1,2,3];
console.log(arr);        //[ 1, 2, 3 ]

//Add to end
arr.push(4);
console.log(arr);        //[ 1, 2, 3, 4 ]

//Remove from end
arr.pop(4);
console.log(arr);       //[ 1, 2, 3 ]

//Add multiple elements
arr.push(5,6);
console.log(arr);       //[ 1, 2, 3, 5, 6 ]

//Add in the beginning
arr.unshift(5);
console.log(arr);       //[ 5, 1, 2, 3, 5, 6 ]

//Remove from beginning
arr.shift();
console.log(arr);     //[ 1, 2, 3, 5, 6 ]

//Splice [ 1, 2, 3, 5, 6 ]
//arr.splice(2,1);
//console.log(arr);       //[ 1, 2, 5, 6 ] -removed 1 element from index 2

//Splice [ 1, 2, 3, 5, 6 ]
//arr.splice(2,2);      //[ 1, 2, 6 ] -removed 2 element from index 2

//[ 1, 2, 3, 5, 6 ]
arr.splice(2,0,99);
console.log(arr);      //[ 1, 2, 99, 3, 5, 6 ] -Added element at index 2

//[ 1, 2, 99, 3, 5, 6 ]
arr.splice(1,2,10,20)  //go to index 2 and remove two elements(2,99) and add two elements(10,20)
console.log(arr);      //[ 1, 10, 20, 3, 5, 6 ]

arr.splice(1,1,10,20)  //go to index 2 and remove one elements(2,99) and add two elements(10,20)
