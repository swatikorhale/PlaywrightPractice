interface Framework
{
       name:string;
       run():void;
       getStatus():String;
}

class TestCase implements Framework
{
       name:string;

       //constructor
       constructor(name:string)
       {
              this.name=name;
       }

       //method
       run():void
       {
              console.log("Run" +this.name);
       }

       getStatus(): String {
              return "PASS";
       }
}