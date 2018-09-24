const express = require('express');
const app = express();
const port = 3000;
//method with 1 argument hat passes 3 arguments to the callback
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    //the * allows anyone to connect to this API
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

    // Pass to next layer of middleware
    next();
});

app.get('/fruits', (req, res)=>{
    res.send(`Hello g101!, I am a basket of fruits!`)
})
app.get('/fruits/:id', (req, res)=>{
    console.log("req", req);
    res.send(`I am a fruit called ${req.params.id}`)
})

app.post('/fruits', (req, res)=>{
    res.send('POST: Add fruit to basket of fruits')
})

app.patch('/fruits/:id', (req, res)=>{
    res.send('PATCH: Bite the fruit from basket of fruits')
})

app.put('/fruits/:id', (req, res)=>{
    res.send('PUT: Bruise the fruit from basket of fruits')
})

app.delete('/fruits/:id', (req, res) => {
    res.send('DELETE: Ate the fruit')
})

const listener = console.log(`You're on port ${port}`);
app.listen(port, listener);
