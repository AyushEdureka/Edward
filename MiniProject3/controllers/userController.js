const User= require('../models/User')
const bcrypt = require('bcryptjs')

 exports.registerUser = async (req,res) => {

    const {name,email,password} = req.body
    const hashedPassword = await bcrypt.hash(password , 10)

    const newUser = new User({name,email,password:hashedPassword})

    await newUser.save()
    res.json({message:'User registered Successfully'})

};

exports.loginUser = async(req,res)=>{

const {email,password} = req.body

const user = await User.findOne({email})

if(!user ||  (await bcrypt.compare(password,user.password))){
    return res.status(400).json({message:'Invalid Credentails'})
}else{
    
}


}
