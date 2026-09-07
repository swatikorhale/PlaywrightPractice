class ICICI
{
    #balance;

    constructor(name,balance)
    {
        this.#balance=balance;
        this.name=name;
    }

    getBalance()
    {
      return this.#balance;
    }

    setBalance(newbalance,iscashier)
    {
        if(iscashier)
        {
            this.#balance=newbalance;
        }
        else
        {
            console.log("Not allowed");
        }
    }
}

let swati=new ICICI("swati","1000");
console.log(swati.getBalance());
swati.setBalance("50000",true);
console.log(swati.getBalance());