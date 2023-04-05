const { getAllTasks } = require('./tasks')
const Task = require('../models/Task')

describe('tasks', () => {
  describe('getAllTasks', () => {
    it('should get all tasks', async () => {
      const req = {}
      const res = {
        status: jest.fn(() => res),
        json: jest.fn()
      }
      const resultOfFind = [{task: 'do the dishes'}]
      jest.spyOn(Task, 'find').mockImplementation(jest.fn(() => Promise.resolve(resultOfFind)))
      await getAllTasks(req, res)
      expect(Task.find).toBeCalledWith({})
      expect(res.status).toBeCalledWith(200)
      expect(res.json).toBeCalledWith(resultOfFind)
    })
    it('should handle errors', async () => {
      const req = {}
      const res = {
        status: jest.fn(() => res),
        json: jest.fn()
      }
      const error = Error('WOW, such error')
      jest.spyOn(Task, 'find').mockImplementation(jest.fn(() => Promise.reject(error)))
      await getAllTasks(req, res)
      expect(res.status).toBeCalledWith(500)
      expect(res.json).toBeCalledWith(error)
    })
  })
})
