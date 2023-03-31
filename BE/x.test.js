const { add } = require('./x')

describe('x', () => {
  describe('add', () => {
    it('should add 2 numbers', () => {
      const result = add(1, 1)
      expect(result).toBe(3)
    })
  })
})
