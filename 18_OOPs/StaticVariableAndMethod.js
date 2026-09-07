class TestRunner
{
    static totalTests=0;
    static passCount=0;

    constructor(name,passed)
    {
        this.name=name;
        TestRunner.totalTests++;
        if(passed)
        {
            TestRunner.passCount++;
        }
    }
}

let t1=new TestRunner("loginTest",true);
let t2=new TestRunner("signInTest",false);
let t3=new TestRunner("dashboradTest",true);
let t4=new TestRunner("supportTest",true);
console.log(TestRunner.totalTests);  //4
console.log(TestRunner.passCount);   //3
console.log(t1.name);
console.log(t2.name);
console.log(t3.name);
console.log(t4.name);
