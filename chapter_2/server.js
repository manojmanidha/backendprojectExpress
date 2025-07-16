// address of this server connected to network is 
// url --> http://localhost:1235
// ip --> 127.0.0.1:1235
const express = require('express')
const app = express();
const PORT = 1235;

const data = ["kishor"]

app.use(express.json())

// type-1 --> website endpoint(when the url is entered in the browser this send the html page)

app.get('/' , (req , res)=>{
    console.log("testing get req" , req.method)
    res.send(`<body>
        <h1>Dataa :</h1>
        <p>${JSON.stringify(data)}</p>
        <a href="/dashboard">Dashboard</a>
        </body>`)
})

app.get('/dashboard' , (req , res) => {
    console.log('hit the dashboard route')
    res.send(`<body>
        <h1>dashboard :</h1>
        <p>${JSON.stringify(data)}</p>
        <a href="/">Home</a>
        </body>`)
})

// CRUD --> c-POST , R-GET , U--> PUT , D--> DELET

// type-2 ->> API endpoint (non - vishual)
app.get('/api/data' , (req , res) => {
    console.log('api response data')
    res.send(data)
})

app.post('/api/data' , (req , res) => {
    const Entry = req.body
    console.log('testing api', Entry)
    data.push(Entry.name)
    res.sendStatus(201)
})

app.delete('/api/endpoint' , (req , res) => {
    data.pop()
    console.log('remove the existing data from the array')
    res.sendStatus(203)
})

app.listen(PORT , ()=>{console.log(`Server started running on port : ${PORT}`)});