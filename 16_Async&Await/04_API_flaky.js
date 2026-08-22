//flaky- suppose 100 tc out of that 3 are failing
//sometimes pass and sometime fail

let attempts=0;

function apiFlaky()
{
    attempts++;

    if(attempts<=3)
    {
        return Promise.resolve("Attempts:" +attempts+ ":Success");
    }

    return Promise.reject("Attempts:" +attempts+ ":failed");
}

async function retryTesting(maxretries)
{
   for(let i=1;i<=maxretries;i++)
   {
    try
    {
        let result=await apiFlaky();
        console.log("Pass promise! I will exit also " +result);
    }
    catch(error)
    {
        console.log("fail promise " +error);
    }
   }
}

retryTesting(5);