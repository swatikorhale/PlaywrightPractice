let a=10;    //global variable
class car
{
    //b=10; //b is not defined-->this will not work as we cannot driectly assign value to instance variable thats why we use constructor
    b;
    constructor()
    {
        console.log(a);
        //console.log(b);
        this.b=4;

    }
}
let obj=new car();
        console.log(obj.b);

