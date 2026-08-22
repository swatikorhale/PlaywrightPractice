function verfifyTest(test, callWhenDone)
{
    console.log("Hi Start the testCase");
    callWhenDone();
}

verfifyTest("Verify the login page is working", () =>
{
     console.log("verified all the details correctly..");
})