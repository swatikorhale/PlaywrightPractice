//we cannot change the value once set

interface point
{
     readonly x:Number;
     readonly y:Number;
}

const point:point =
{
     x:10,
     y:20,
};

//point.x=5;  -->cannot change