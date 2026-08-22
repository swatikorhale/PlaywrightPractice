let testRun=new Promise(function(resolve,reject)
{
    reject("Assertion failed");
});

testRun.then(function(data)
{
    console.log(data);
}).catch(function(errormsg)
{
    console.log(errormsg);
}).finally(function()
{
    console.log("I will always be executed..")
})