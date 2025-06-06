//STEP 1: IMPORT ALL THE MODULES WHICH YOU REQUIRE IN YOUR BACKEND STEP UP
const  http = require('http');  //Buil It Module : USE DIRECTLY 

//STEP 2: CREATE WEB SERVER

http.createServer((request,response)=>{

response.write('Hello Edward Wassup');

response.end();

}).listen(3000);   // STEP 3 Starting the server

console.log("Server running at http://localhost:3000")

//Run: node filename.js