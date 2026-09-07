enum HttpMethod
{
    Geto="GET",
    posto="POST",
    puto="PUT",
    deleto="DELETE"
}

function sendRequest(method:HttpMethod, endpoint:string):void
{
    console.log(method +"->" +endpoint);
}

sendRequest(HttpMethod.Geto,"/api/users");
sendRequest(HttpMethod.posto,"/api/users");
sendRequest(HttpMethod.deleto,"/api/users")