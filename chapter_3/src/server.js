import express from 'express';
import path , {dirname} from 'path';
import {fileURLToPath} from 'url';

const app = express();
const PORT = process.env.PORT || 

app.get('/' , ()=>{
    res.sendFile(path)
})

app.listen(PORT , ()=>{
    console.log('server started at port :' , PORT)
})