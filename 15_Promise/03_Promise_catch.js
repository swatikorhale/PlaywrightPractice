let apiCall=new Promise(function(resolve,reject)
{
    reject("Error 500");
});

apiCall.then(function(data)
{
    console.log("Data is success!!");
    console.log(data);
}).catch(function(error)
{
    console.log(error);
})

//catch runs only when promise is rejected
//,then() is completly skipped