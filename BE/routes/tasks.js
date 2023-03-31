const express = require('express')
const router = express.Router()

const { 
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
 } = require('../controllers/tasks')

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router

// app.get('/api/tasks)  - get all tasks
// app.post('/api/tasks) - create task
// app.get('/api/tasks/:id) - get task
// app.patch('/api/tasks/:id) - update task
// app.delete('/api/tasks/:id) - delete task