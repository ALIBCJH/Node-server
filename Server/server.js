const express = require('express');
const app = express()

const port = 3000;

app.get('/', (req, res) => {
    res.send("Hello World")
})

//About page 
app.get('/about', (req, res) => {
    res.send("This is the about Page running on port 3000")
})

//Start a server on port 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})