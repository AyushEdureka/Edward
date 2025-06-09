const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 3000;

//Middleware
app.use(cors()); //ENABLE CORS
app.use(express.json());  //PARSE JSON DATA

//dummy route to handle the registration

app.post('/register',(req,res)=>{

const {name,email,password} = req.body;

console.log('User Registered ' ,{name,email})

//reponse from backend
res.json( {message:`Welcome , ${name}! Your Acoount has been registered`});
})

app.listen(PORT,()=>{
    console.log('Server running')
})