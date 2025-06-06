const express = require('express')
const axios = require('axios')

const app = express()
const PORT = 3300

const CAT_API = 'https://api.thecatapi.com/v1/images/search'
const DOG_API = 'https://dog.ceo/api/breeds/image/random'

//show random cat and dog image

app.get('/cat-vs-dog' ,async (req,res)=>{
         
    try{

      const catResponse = await axios.get(CAT_API)
      const dogReponse = await axios.get(DOG_API)

      res.send(
        `
        <h1>Cat vs Dog</h1>
        <img src="${catResponse.data[0].url}"    style="width:300px" ;height:300px">
        <img src="${dogReponse.data.message}"   style="width:300px"  ; height:300px">
        <br>
        <button onClick="window.location.reload()">Reset</button>
        `
      )


    }catch(error){
        //when your backend is not able to send the response : Status code is 500
        //Internal server error
        res.status(500).send('Error Loading Images');
    }
})

app.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}`)
})