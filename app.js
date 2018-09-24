const express = require('express');
const app = express();
const port = 3000;

app.get('/fruits', (req, res)=>{
    res.send(`Hello g101!, I am a basket of fruits!`)
})
app.get('/fruits/:id', (req, res)=>{
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

const listener = console.log(`You're on port ${port}`);
app.listen(port, listener);