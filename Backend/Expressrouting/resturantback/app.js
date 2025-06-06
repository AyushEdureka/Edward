const express  = require('express')

const app = express();

const PORT = 3000;

//Json format for data
app.use(express.json())

//1.Fetch all the restaurant data

app.get('/restraunt',(req,res)=>{
    res.send('List of all restraunt')
});

app.get('/restraunt/:id',(req,res)=>{
    res.send(`Menu of restarunt with ID: ${req.params.id} `)
})

// POST :Place an order
app.post('/order',(req,res)=>{
    res.send(`Order Placed Successfully! Order Details: ${JSON.stringify(req.body)}`);
});

//put:  UPdate the order: 
app.put('/order/:id',(req,res)=>{
    res.send(`Order with ID ${req.params.id} updated sucessfully`) 
})

//cancel the order
app.delete('/order/:id' , (req,res)=>{
    res.send(`Order with ID ${req.params.id} deleted sucessfully`)
})

//start the server
app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})