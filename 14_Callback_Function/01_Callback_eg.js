//callback as in it will give function and will say call me when your ready
function placeOrder(item,callback)
{
    console.log("order placed....");
    callback();
}

//1st way to declare call back function
//here we are sending below function in main function
//below is callback() function and we are sending it in aboe function
placeOrder("Burger", function(){
    console.log("order is ready. pick it up....");
})

//2nd way to declare
placeOrder("Burger",() => 
{
    console.log("order is ready. pick it up....");
})