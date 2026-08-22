let statusCode=200;
let category=
  statusCode <300 ?"Success" :
  statusCode <400 ? "Redriect" :
  statusCode <500 ? "Client Error" : "Server Eror";

  console.log(`Status : ${statusCode} : ${category}`);