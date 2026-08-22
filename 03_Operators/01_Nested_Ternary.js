//nested_ternary_operator-->Multiple Condition

let age=26;
//if age >18 he will go to goa else no
//let is_pramod_enjoy=age>18 ? true :false;

// 2nd condition--> age>26? "drink" :"No"
let is_pramod_enjoy=age>18 ? (age>26? "drink" :"No") :false;

console.log(is_pramod_enjoy);
console.log(`Can Pramod go to goa and enjoy:" ${is_pramod_enjoy}`);