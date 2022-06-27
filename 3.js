const {sum, subtract} = require('./math')

let result, expected

result = sum(3, 7)
expected = 10
expect(result).toBe(expected)

result = subtract(7, 3)
expected = 4
expect(result).toBe(expected)

let resultLength = "test"
let expectedLength = "result"

expect(resultLength).toBe(expectedLength)


function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    },
    toHaveLength(expected) {
      if (actual.length !== expected.length) {
        throw new Error(`"${actual}" length is not equal to "${expected}" length`)
      }
    },
  }
}
