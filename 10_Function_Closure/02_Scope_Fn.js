let g_x=10;

function outer()     //outer function
{
    let x=10;

    function inner()     //inner function
    {
        let y=20;
        console.log(x);     //inner can access everything from outer
    }

    inner();
    console.log(y);      //outer cannot access from inner
}

outer();