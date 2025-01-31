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

//Contact Page
app.get('./Contact', (req, res) => {
    res.send("This is the contact page running on port 3000")
})
//Login Page
app.get('/login', (req,res) => {
    res.send ("This is the login page")
})

//404 Page
app.get('*', (req, res) => {
    res.send("404 Page not Found")
})

//Start a server on port 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
