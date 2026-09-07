class BaseTest
{
    setUp()
    {
        console.log("Base: Open Browser");
    }
}

class loginTest extends BaseTest
{
    setUp()
    {
        console.log("Logintest: Open Browser");
    }
}

let obj=new loginTest;
obj.setUp();