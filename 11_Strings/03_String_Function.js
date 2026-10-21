let str="Hello, World!";

//length
console.log(str.length);          //13

//character At
console.log(str[0]);             //H
console.log(str.at(-1)); 
console.log(str.at(-6));

console.log(str.charAt(0));
//ALL are same

//ascii charcter at
console.log(str.charCodeAt(1));   //101

//Searching and checking
let url="https://rahulshettyacademy.com/locatorspractice/";

//includes
console.log(url.includes("rahulshettyacademy"));
console.log(url.includes("swati"));

//start and ends with
console.log(url.startsWith("https:/"));
console.log(url.endsWith("locatorspractice/"))

//indexOf/LastIndexOf
console.log(url.indexOf("p"));
console.log(url.lastIndexOf("p"));

//slice(start,end-1)
console.log(url.slice(0,5));  
console.log(url.slice(7));     //rahulshettyacademy.com/locatorspractice/
console.log(url.slice(-4));    //ice/

//Substring(start,end-1)
//does not support negative
console.log(url.substring(6,10));

//At
url.at(0);
url.at(-1);

//Splitting and joining
let str1="pass,fail,skip";        //["Pass","Fail","Skip"]-->split will create array
str.split(",");
let str2="hello";
str1.split("");         //['h','e','l','l','o']

//join
let parts=["20","08","2026"];
let date=parts.join("/");
console.log(date);

//split()->String to array
//join()->array to string

//To String
(200).toString();   //"200"
true.toString();   //"true"

