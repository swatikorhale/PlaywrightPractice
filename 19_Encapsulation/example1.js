//encapsulation-hide internal details and access them only through getter and setter methods

class Person
{
      //hide your child->private variable
      //private
      #child1;
      #child2;

      //constructor for return
      constructor(name,ch1,ch2)
      {
        this.name=name;
        this.#child1=ch1;
        this.#child2=ch2;
      }

      getchild1()
      {
        return this.#child1;
      }

      setChild1(changed_name)
      {
        this.#child1=changed_name;
      }
}

let p=new Person("Swati","Aman","Ayesha");
console.log(p.getchild1());
p.setChild1("Aryan");
console.log(p.getchild1());
