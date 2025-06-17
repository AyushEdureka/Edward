const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const fs = require('fs')
const bcrypt = require('bcrypt')

const app = express()
app.use(cors());  //ENABLE CORS
app.use(bodyParser.json())

//Store the data of user Creating a file
const USERS_FILE = "./users.json"

//File System Module(fs): Read user Data
function readUsers(){
    if(!fs.existsSync(USERS_FILE )) return []
    return JSON.parse(fs.readFileSync(USERS_FILE))
}

//Save the data
function saveUsers(users){
    fs.writeFileSync(USERS_FILE, JSON.stringify(users,null,2))
   // JSON.stringify(value,null,space)
   //example
   //user = [
     // {}
     //  {} 
    //  ]

}


//Register
app.post("/register", async (req,res)=>{
    const {name,email,password} = req.body

    if(!name || !email || !password ) return res.json({message:"All feilds msut be completed"});

    const users = readUsers();
    const existingUser  = users.find(user => user.email === email)
    if(existingUser) return res.json({message:"User Already exits"})

    const hashedPassword = await bcrypt.hash(password,10);
    users.push({name,email,password:hashedPassword});
    saveUsers(users);
    
    
    res.json({message:"User registered Successfully"})
});


//Login
app.post("/login",async (req,res)=>{
    const {email,password} = req.body;
   const users = readUsers();
      
   const user = users.find(u => u.email === email);
   if(!user) return res.json({message:"User Not Found"})

   const valid = await bcrypt.compare(password , user.password);
   if(valid) res.json({message:"Login Sucessfully"})
    else res.json({message:"Incorrect password"}) 

});



app.listen(3000,()=>{
    console.log("Server is running at http://localhost:3000")
})