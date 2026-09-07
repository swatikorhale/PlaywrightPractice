class Car
{
    #engine;

    constructor(name,engineName)
    {
        this.name=name;
        this.#engine=engineName;
    }

    getEngine()
    {
        return this.#engine;
    }

    setEngine(newEngine)
    {
        this.#engine=newEngine;
    }
}

let obj=new Car("tesla","v8");
console.log(obj.getEngine());
obj.setEngine("v9");
console.log(obj.getEngine())