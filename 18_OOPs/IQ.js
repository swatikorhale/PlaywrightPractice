class APIClient
{
    constructor(baseURL)
    {
        this.baseURL=baseURL;
    }

    get(path)
    {
        return this.baseURL+path;
    }
}

let stage=new APIClient("//https://stage.api.com");
let prod=new APIClient("//https://prod.api.com");
console.log(stage.get("/stageUser"));
console.log(prod.get("/prodUser"));