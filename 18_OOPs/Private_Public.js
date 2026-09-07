//private feilds(#)-Hidden data
//public feilds

class Credentials
{
    #apiKey;   //private with #
    user;      //public

    constructor(user,key)
    {
        this.user=user;
        this.#apiKey=key
     }

     //function
     getAuthHeader()
     {
        return "Bearer" + this.#apiKey;
     }
}

let cred=new Credentials("admin","secret_1234");
console.log(cred.user);
console.log(cred.key);//not accesible outside class as apikey is private


