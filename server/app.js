const express = require('express');
const app = express();
port = 8000;
const cors = require('cors');
app.use(cors('http://localhost:3000'));


app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({extended:true}));

const movieflex = require('./movieflex');
app.use('/api/movieflex', movieflex);

app.get('/api/movieflex/v1', (req,res) => {
    res.send('MovieFlex Backend Server is Running')
})


app.listen(port, function(){
    console.log('MovieFlex Backend Server is running on Port:8000')
})
