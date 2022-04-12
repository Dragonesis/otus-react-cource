import { mul, div, add, minus, square, power, factorial } from './mathOperators'

describe('mathOperators test cases', () => {
  it('mul 1 * 2 to equal 2', () => {
    expect(mul(1, 2)).toBe(2)
  })

  it('mul 2 * 2 to equal 4', () => {
    expect(mul(2, 2)).toBe(4)
  })

  it('div 2 / 2 to equal 1', () => {
    expect(div(2, 2)).toBe(1)
  })

  it('div 4 / 2 to equal 2', () => {
    expect(div(4, 2)).toBe(2)
  })

  it('add 4 + 2 to equal 6', () => {
    expect(add(4, 2)).toBe(6)
  })

  it('minus 4 - 2 to equal 2', () => {
    expect(minus(4, 2)).toBe(2)
  })

  it('square 2 to equal 4', () => {
    expect(square(2)).toBe(4)
  })

  it('square 2 ^ 3 to equal 8', () => {
    expect(power(2, 3)).toBe(8)
  })

  it('factorial 4 to equal 24', () => {
    expect(factorial(4)).toBe(24)
  })

  it('factorial 1 to equal 1', () => {
    expect(factorial(1)).toBe(1)
  })

  it('factorial 0 to equal 1', () => {
    expect(factorial(0)).toBe(1)
  })
})

describe('math expression test without second argument', () => {
  it('mul 1 * empty to equal 0', () => {
    expect(mul(1)).toBe(0)
  })

  it('add 2 + empty to equal 2', () => {
    expect(add(2)).toBe(2)
  })

  it('div 3 / empty to equal infinity', () => {
    expect(div(3)).toBe(Infinity)
  })

  it('minus 4 - empty to equal 4', () => {
    expect(minus(4)).toBe(4)
  })

  it('power 5 ** empty to equal 1', () => {
    expect(power(5)).toBe(1)
  })
})
