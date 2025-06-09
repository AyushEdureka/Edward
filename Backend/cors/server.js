const express = require('express')
const cors = require('cors')

const PORT= 3300;

const app = express();

//STEP 1:setup the cors as middleware and json to passs the data
 app.use(cors())

app.use(express.json());

app.post('/login',(req,res)=>{
   
 const {name,email} = req.body;

 //simple validation
 if(name && email){
    res.json( {message:`Welcome to my website ${name}`}  )
 }else{
    res.status(400).json({message:'Name and email are reuired'})
 }

});

app.listen(PORT,()=>{
    console.log('Server is running');
})