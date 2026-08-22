//when step2 depends on step 1's result, you must run them sequentially

function apiCall(name)
{
    return new Promise(function (resolve){
    setTimeout(function(){
     resolve(name,"200 Ok!")
},1000)
});
}

async function seuentialTest()
{
    console.log("Starting of the test");
   
    let r1=await apiCall("Login");
    console.log(r1);

    let r2=await apiCall("Dashboard");
    console.log(r2);

    let r3=await apiCall("Report");
    console.log(r3);
}

seuentialTest();
