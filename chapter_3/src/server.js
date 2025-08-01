import express from 'express';
import path , {dirname} from 'path';
import {fileURLToPath} from 'url';
import authRoutes from './routes/authRoute.js';
import todoRoutes from './routes/todoRoute.js'

const app = express();
const PORT = process.env.PORT || 5000

const __filename = fileURLToPath(import.meta.url)

const __dirname = dirname(__filename)

app.use(express.json())

app.use(express.static(path.join(__dirname , '../public')))

app.use('/auth' , authRoutes)

app.get('/' , ()=>{
    res.sendFile(path.join(__dirname , 'public' , 'index.html'))
})

app.listen(PORT , ()=>{
    console.log('server started at port :' , PORT)
})