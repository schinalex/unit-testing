const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://john:1234@node-express-project.vy2bzbl.mongodb.net/express-task-manager?retryWrites=true&w=majority'

const connectDB = () => {
    return mongoose.connect(connectionString)
}

module.exports = connectDB
