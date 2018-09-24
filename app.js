const express = require('express');
const app = express();
const port = 3000;



const listener = console.log(`You're on port ${port}`);
app.listen(port, listener);