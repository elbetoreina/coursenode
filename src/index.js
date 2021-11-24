const express = require('express')
const cors = require('cors')
const connectDb = require('./db/mongoose')

const userRouter = require('./routes/user')
const taskRouter = require('./routes/task')

const corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS"
};

const app = express()
connectDb();
app.use(cors(corsOptions))
const port = process.env.PORT



app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const Task = require('./models/task')
const User = require('./models/user')
const connectDB = require('./db/mongoose')


