//find-return first element only where this condition is true
let nums=["10","20","25","35"]
let result= nums.find(temp =>temp>20);     

console.log(result);   //25

//findindex
let index=nums.findIndex(n=>n>20);
console.log(index);   //2

//findLast-->return last element only where this condition is true
let res1=nums.findLast(temp =>temp>20);
console.log(res1);        //35

//LastIndex-->return last element only where this condition is true
let lstIndex=nums.findLastIndex(temp =>temp>20);
console.log(lstIndex);     //3



