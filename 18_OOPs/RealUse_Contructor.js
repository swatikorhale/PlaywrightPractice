class TestCase
{
    constructor(name,status,priority)
    {
        //attributes
        this.name=name;
        this.status=status;
        this.priority=priority;
    }

    display()
    {
        console.log(this.name +"->" +this.status+ "->" +this.priority);
    }
}

let loginTest_ref=new TestCase("LoginTest","Pass","P0");
let signupTest_ref=new TestCase("SignUpTest","Fail","P1");

loginTest_ref.display();
signupTest_ref.display();