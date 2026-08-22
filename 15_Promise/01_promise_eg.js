let order=new Promise(function(resolve,reject)
{
     let orderReady=false;
     if(orderReady)
     {
        resolve("Order is delivered");
     }
     else
     {
        reject("Order is cancelled..");
     }
});

console.log(order);