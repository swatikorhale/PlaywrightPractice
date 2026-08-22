let a={status:"pass"};
let b=a;       //copy the refeence and then point to the same value
b.status="fail";
console.log(a.status);    //fail


let c={status:"pass"};
let d={status:"pass"};
console.log(c==d);

//object
const t_js={
        name:"Swati",
        status:"Pass"
};
console.log(t_js);