let browsers=["chrome","edge","mozilla","Firefox","Safari"];

//pop-last element remove
browsers.pop();
console.log(browsers);           //[ 'chrome', 'edge', 'mozilla', 'Firefox' ]

//shift- first element remove
let removed=browsers.shift();
console.log(browsers);         //[ 'edge', 'mozilla', 'Firefox' ]
//console.log(removed);

//for loop
for(let i=0;i<browsers.length;i++)
{
    console.log(browsers[i]);
    if(browsers[i]==="mozilla")
    {
        console.log("Doesnt support automation");
        break;
    }
}

