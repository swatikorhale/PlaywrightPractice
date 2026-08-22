//Closure- means when an inner function remembers and call variables from its outer function even after the outer function has finihed executing

//outer function
function startBrowser()
{
    let name="Chrome";

    //inner function
    function installBrowser()
    {
        console.log(name);
    }
    return installBrowser;
}

const runTc= startBrowser();  //at this step it is automatically calling inner function too
runTc();