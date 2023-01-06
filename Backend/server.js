const express  = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')

// database
const connectDB = require('./DB/connectDB')

// /Functionality
const movieRouter = require('./controller/movies')

//Middleware
const notFound = require('./Middleware/NotFound')

app.use(express.json())
app.use(cors())
app.use('/api/movie/',movieRouter)

app.get('/', (req,res)=>{
    res.send('A Movie is released on next Festivals')
})

app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500;
    const errorMessage = err.status || 'Something went wrong';

    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack: err.stack
    });
});


app.use(notFound)

const port = process.env.PORT
const server = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, ()=>console.log(`Server is listening on : ${port}`))
    } catch (error) {
        console.log(error + 'something went wrong');
    }
}

server()