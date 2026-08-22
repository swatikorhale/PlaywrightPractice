//Async/Await is a cleaner way to write promises instead of chaining .then().then().then()
//you write the code that looks ynchronous but works asynchronusly

function openBrowser()
{
    return new Promise(function(resolve)
    {
      resolve("Browser Opened..");
    }
)};

function goToLogin()
{
    return new Promise(function(resolve)
    {
       resolve("Login Page Loaded..")
    }
)};

function enterCredential()
{
    return new Promise(function(resolve)
    {
        resolve("Credentials entered..")
    }
)};

function clickOnLogin()
{
    return new Promise(function(resolve)
    {
        resolve("Logined successfully");
    }
)};

//Now Asyn comes  in picture
async function testLoginFlow() {
    
    let msg1=await openBrowser();
    console.log("Step 1:",msg1);

    let msg2=await goToLogin();
    console.log("Step 2:",msg2);

    let msg3=await enterCredential();
    console.log("Step 3:",msg3);

    let msg4=await clickOnLogin();
    console.log("Step 4:",msg4);
}

testLoginFlow();
