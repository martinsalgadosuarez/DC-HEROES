const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

/* Middleware */
app.use(express.static('public'));

/* Routes */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
})

/* Servidor */

app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}\n http://localhost:${port}`));



app.get('/babbage', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/babbage.html'))
})
app.get('/berners-lee', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/berners-lee.html'))
})
app.get('/clarke', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/clarke.html'))
})
app.get('/hamilton', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/hamilton.html'))
})
app.get('/hopper', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/hopper.html'))
})
app.get('/lovelace', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/lovelace.html'))
})
app.get('/turing', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/turing.html'))
})