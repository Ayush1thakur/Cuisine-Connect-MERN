const express = require ("express");
const app = express();
const db = require ("./db");

const PORT = 1000;

app.listen(PORT, (err)=> {
    if (err){
        console.log (err);
    }
    else{
        console.log(`Server started at http://localhost:${PORT}`);
    }
})