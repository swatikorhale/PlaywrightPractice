//Array
let status=["Pass","Fail","Skip"];

//Access
console.log(status[0]);   //pass
console.log(status[-1]);  //undefined
console.log(status.at(-1)) //Skip

//Modify
status[1]="Block";
console.log(status);      //[ 'Pass', 'Block', 'Skip' ]

//Length
console.log(status.length) //3