const express = require('express')
const cors = require('cors')
require('./db/mongoose')

const userRouter = require('./routes/user')
const taskRouter = require('./routes/task')

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


