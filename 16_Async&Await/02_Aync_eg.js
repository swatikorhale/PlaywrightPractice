async function testApi()
{
    try{
        let result=await Promise.reject("503 Service unavailable");
        console.log("Result:", result);
    }
    catch(error)
    {
        console.log("Error:",error);
    }
    finally
    {
        console.log("Cleanup code");
    }
}
    
testApi();
