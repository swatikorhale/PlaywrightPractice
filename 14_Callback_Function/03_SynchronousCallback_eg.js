let testResults=["Pass","Fail","Pass","Skip"];

testResults.forEach(function(result,index)
{
    console.log("Test " +index+ "=>" +result);
});

//for each is a synchronous operation->
//  it will move on only when all 4 iterations are competed.

