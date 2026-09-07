interface Calculator
{
    add(a:number,b:number) :number;
    subtract(a:number,b:number) :number;
}

const calc: Calculator =
{
    add:(a,b)=>a+b,
    subtract: (a,b)=>a-b,
}

let result=calc.add(3,4);
console.log(result);
calc.subtract(10,5);