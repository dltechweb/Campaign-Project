const express = require('express');
const cors = require('cors');
const connectDB = require('./db/connect')
const notFound = require('./middlewares/not-found')
const errorHandlerMiddleware = require('./middlewares/error-handler')
const tgifRouteTasks = require('./routes/tgif-route')
require('dotenv').config()


const app = express()
//routes
app.use('/api/v1/tgif', tgifRouteTasks)

//middleware
app.use(express.json())
app.use(cors());
app.use(notFound)
app.use(errorHandlerMiddleware)

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin,Content-Type, Authorization, x-id, Content-Length, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});



// const port = process.env.PORT || 5999
const port = 5999



const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server start on port no ${port} ...`));
    } catch(error) {
        console.log(error);
    }
}

start()