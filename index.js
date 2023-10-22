const express = require('express')
const data = require('./task')

const api = express()
const Host = 'localhost'
const PORT = 8888

api.get('/',(req,res)=>{
    res.send('Welcone!')

}
)

api.get('/poeple',(req,res)=>{

    res.status(200).json

})

api.listen(port,() => console.log('API running at ${HOST}:${PORT}!'))
