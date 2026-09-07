class Animal
{
    //parent constructor-single argument
    constructor(name)
    {
        this.name=name;
    }

    eat()
    {
        console.log(this.name + " is eating");
    }

    sleep()
    {
        console.log(this.name + " is sleeping");
    }

    foo()
    {
        console.log("Foo");
    }
}

class Dog extends Animal
{
    //child constructor-two parameters
    constructor(name,breed)
    {
        super(name); //used to call parent constructor
        this.breed=breed;
    }

    bark()
    {
        super.foo();  //used to call parent method
        console.log(super.name);  //parent variable calling is not allowed in JS
        console.log(this.name + " is barking");
    }
}

let d1=new Dog("rex","labradorr");
d1.eat();
d1.sleep();
d1.bark();
console.log(d1.breed);

//