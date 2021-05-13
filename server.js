const express = require('express')

const srv = express()

const todoRoute = require('./Routes/todos')

srv.use(express.json())
srv.use(express.urlencoded({extended:true}))

srv.get('/hello' , (req , res) => {
    res.send("Hello World")
})

srv.use('/public' , express.static(__dirname + '/Public'))

srv.use('/todos' , todoRoute)

srv.listen("4674" , () => {
    console.log("server started on http://localhost:4674")
})