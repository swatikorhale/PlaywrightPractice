//in this case all promises resolving
let checkAuth=Promise.resolve("Auth ok");
let checkDB=Promise.resolve("DB Ok");
let checkcache=Promise.resolve("Cache ok");

Promise.all([checkAuth,checkDB,checkcache]).then(function(result)
{
    console.log("All checks:", result);
});

//In this case one prmise is failing
Promise.all([
    Promise.resolve("Ok"),
    Promise.reject("DB down"),
    Promise.resolve("Ok")
])
.then(function(res)
{
    console.log(res);
})
.catch(function(err)
{
    console.log("Failed:",err);
})

//here it will call catch because for then to call all have to be successful