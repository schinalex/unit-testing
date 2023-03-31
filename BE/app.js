const express = require('express')
const app = express()
const port = 3000
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')

// middleware
app.use(express.json())
app.use('/api/tasks', tasks)

// routes
app.get('/home', (req, res) => {
    res.send('<h1>Task Manager API</h1>')
})

const start = async() => {
    try {
        await connectDB()
        app.listen(3000, console.log(`Server listening on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()
