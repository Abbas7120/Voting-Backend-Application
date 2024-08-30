const express=require('express')
const app=express()
const db=require('./db')
const PORT=process.env.PORT ||3000
const bodyParser=require('body-parser')
require('dotenv').config()


app.use(bodyParser.json())
const userRoutes=require('./routes/userRoutes')
const candidateRoutes=require('./routes/candidateRoutes')

app.use('/user',userRoutes)
app.use('/candidate',candidateRoutes)

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})