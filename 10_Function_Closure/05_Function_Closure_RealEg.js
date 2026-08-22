function maxRetryMaker(max)
{
     let attempts=0;

     function tryAgain(testName)
     {
        attempts++;

        if(attempts>max)
        {
            return `${testName} exceed the maximum retries (${max})`;
        }

        return `Attempt ${attempts}/${max} for ${testName}`;
     };
     return tryAgain;
}

let runTcRetry=maxRetryMaker(3);
//here we are running outside the maxRetryMaker but variable is remembering the value of variable attempt
console.log(runTcRetry("Login"));
console.log(runTcRetry("Login"));
console.log(runTcRetry("Login"));