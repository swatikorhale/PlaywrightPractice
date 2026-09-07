class BasePage
{
    constructor(pageName)
    {
        this.pageName=pageName;
    }

    open()
    {
        console.log("Opening a browser");
    }

    close()
    {
        console.log("Closing a browser");
    }
}

class loginPage extends BasePage
{

}

let obj=new loginPage();
obj.open();
obj.close();