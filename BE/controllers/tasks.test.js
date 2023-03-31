const { getAllTasks } = require('./tasks')

describe('tasks', () => {
  describe('getAllTasks', () => {
    it.skip('should get all tasks', () => {
      const check = {json: jest.fn()}
      return getAllTasks({}, {status:() => check}).then(() => {
        expect(check.json).toHaveBeenCalledWith({})
      })
    })
  })
})
