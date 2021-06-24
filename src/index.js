const express = require('express')
const cors = require('cors')
require('./db/mongoose')

const userRouter = require('./routes/user')
const taskRouter = require('./routes/task')

// const corsOptions = {
//     origin: "*", methods:
//         "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS", allowedHeaders:
//         "Access-Control-Allow-Headers,Access-Control-Allow-Origin,Access-Control-Request-Method,Access-Control-Request-Headers,Origin,Cache-Control,Content-Type,X-Token,X-Refresh-Token", credentials: true, preflightContinue: false,
//     optionsSuccessStatus: 204
// };
const app = express()
app.use(cors())
const port = process.env.PORT



app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const Task = require('./models/task')
const User = require('./models/user')


