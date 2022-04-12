import { firstPrioritiesCalc, secondPrioritiesCalc, thirdPrioritiesCalc, unaryPrioritiesCalc } from './engine'

describe('unaryPrioritiesCalc simple cases', () => {
  it('[4 !, + 8]', () => {
    expect(unaryPrioritiesCalc([4, '!', '+', 8])).toEqual([24, '+', 8])
  })

  it('[4 !, + 8, + 8]', () => {
    expect(unaryPrioritiesCalc([4, '!', '+', 8, '+', 8])).toEqual([24, '+', 8, '+', 8])
  })

  it('[4 !, + 8, * 2]', () => {
    expect(unaryPrioritiesCalc([4, '!', '+', 8, '*', 2])).toEqual([24, '+', 8, '*', 2])
  })
})

describe('unaryPrioritiesCalc mixed secondary cases', () => {
  it('[4 !, + 8]', () => {
    expect(unaryPrioritiesCalc([4, '!', '+', 8])).toEqual([24, '+', 8])
  })

  it('[4 !, + 8, + 5 !, + 4]', () => {
    expect(unaryPrioritiesCalc([4, '!', '+', 8, '+', 5, '!', '+', 4])).toEqual([24, '+', 8, '+', 120, '+', 4])
  })
})

describe('firstPrioritiesCalc simple cases', () => {
  it('[1, * 32]', () => {
    expect(firstPrioritiesCalc([1, '*', 32])).toEqual([1, '*', 32])
  })

  it('[32, /, 32]', () => {
    expect(firstPrioritiesCalc([32, '/', 32])).toEqual([32, '/', 32])
  })

  it('[32, + 32]', () => {
    expect(firstPrioritiesCalc([32, '+', 32])).toEqual([32, '+', 32])
  })

  it('[2, ^ 3, + 4]', () => {
    expect(firstPrioritiesCalc([2, '^', 3, '+', 2])).toEqual([8, '+', 2])
  })
})

describe('firstPrioritiesCalc mixed with second priorities and unary priorities cases', () => {
  it('[32, /, 32, +, 10, *, 10]', () => {
    expect(firstPrioritiesCalc([32, '/', 32, '+', 10, '*', 10])).toEqual([32, '/', 32, '+', 10, '*', 10])
  })

  it('[32, /, 32, +, 10, *, 10, - 3, ^ 3]', () => {
    expect(firstPrioritiesCalc([32, '/', 32, '+', 10, '*', 10, '-', 3, '^', 3])).toEqual([
      32,
      '/',
      32,
      '+',
      10,
      '*',
      10,
      '-',
      27,
    ])
  })
})

describe('secondPrioritiesCalc simple cases', () => {
  it('[1, * 32]', () => {
    expect(secondPrioritiesCalc([1, '*', 32])).toEqual([32])
  })

  it('[32, /, 32]', () => {
    expect(secondPrioritiesCalc([32, '/', 32])).toEqual([1])
  })

  it('[32, + 32]', () => {
    expect(secondPrioritiesCalc([32, '+', 32])).toEqual([32, '+', 32])
  })
})

describe('secondPrioritiesCalc mixed with second priorities and unary priorities cases', () => {
  it('[32, /, 32, +, 10, *, 10]', () => {
    expect(secondPrioritiesCalc([32, '/', 32, '+', 10, '*', 10])).toEqual([1, '+', 100])
  })
})

describe('secondPrioritiesCalc invalid cases', () => {
  it('[2, ^ 5]', () => {
    expect(() => secondPrioritiesCalc([2, '^', 5])).toThrow(TypeError('Unexpected stack!'))
  })
})

describe('thirdPrioritiesCalc invalid cases', () => {
  it('[32, / 32]', () => {
    expect(() => thirdPrioritiesCalc([32, '/', 32])).toThrow(TypeError('Unexpected stack!'))
  })

  it('[2, ^ 6]', () => {
    expect(() => thirdPrioritiesCalc([3, '^', 6])).toThrow(TypeError('Unexpected stack!'))
  })
})

describe('thirdPrioritiesCalc simple cases', () => {
  it('[32, + 32]', () => {
    expect(thirdPrioritiesCalc([32, '+', 32])).toEqual(64)
  })

  it('[32, - 32]', () => {
    expect(thirdPrioritiesCalc([32, '-', 32])).toEqual(0)
  })

  it('[32, - 32, +, 10]', () => {
    expect(thirdPrioritiesCalc([32, '-', 32, '+', 10])).toEqual(10)
  })
})
