import express from 'express'

const app =  express()

const PORT  = process.env.PORT 

app.get('/',  (req, res ) => {
    return res.send({status : true, data : 'response from http://localhost:4000'})
})

app.listen(PORT,  () =>{
    console.log(`App is running on http://localhost:${PORT}`)
})