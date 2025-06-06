const express = require('express'); //Import express module
const app = express();  // Create an Express application

//Define a route (URL PATH ) and reponse
app.get('/login',(req,res)=>{
    res.send('Fill the form to login ')
});


//Make the Server listen Or Start the server
//PORT: Address of backend

app.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000 ");
});