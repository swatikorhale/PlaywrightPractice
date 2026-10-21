function getStatus(code)
{
    if(code>=200 && code<300)
    {
        return "success";
    }
    else if(code>=400 && code<500)
    {
        return "client error"
    }
    else if(code>=500)
    {
        return "Server Error"
    }
    else
    {
        return "Unknown";
    }
}

let result=getStatus(401);
console.log(result);