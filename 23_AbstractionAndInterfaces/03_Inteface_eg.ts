interface APIResponse
{
    statusCode:number;
    body:String;
    headers:Object;
    responseTime:number;
}

let responseData: APIResponse =
{
    statusCode:200,
    body: "{}",
    headers:{},
    responseTime:200
}

console.log("StatusCode:" +responseData.statusCode);
console.log("Body:" +responseData.body);
console.log("Body:" +responseData.headers);
console.log("Body:" +responseData.responseTime);

