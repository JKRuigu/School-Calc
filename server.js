const express = require('express');
const bodyParser = require('body-parser');

server = express();


//Intializing bodyParser
server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());


server.get('/',(req,res)=>{
    res.send('Hello')
});

const port = 8080

server.listen(port,()=>{console.log(`Server started on port ${port}`);
})