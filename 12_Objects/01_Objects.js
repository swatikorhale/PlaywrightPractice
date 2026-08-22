let a={status:"pass"};
console.log(a.status);
console.log(a["status"]);

//keys are case sensative

let a1={status:"pass", Status:"fail"};
console.log(a1.status);
console.log(a1.Status);