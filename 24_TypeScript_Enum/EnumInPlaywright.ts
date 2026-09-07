enum Browser
{
   Chrome="Chrome",
   Firefox="Firefox",
   Safari="Safari",
   Edge="Edge",
}

function launchBrowser(browser:Browser) : void
{
    switch(browser)
    {
        case Browser.Chrome:
            console.log("Launching Chrome..");
            break;

        case Browser.Firefox:
            console.log("Launching Firefox..");
            break;    

         case Browser.Safari:
            console.log("Launching Safari..");
            break;   
    }
}

launchBrowser(Browser.Chrome);