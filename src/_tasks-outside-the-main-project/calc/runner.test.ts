import { runner } from './runner'

describe('Runner single argument cases', () => {
  it('5', () => {
    expect(runner('5')).toEqual(5)
  })
})

describe('Runner simple cases', () => {
  it.each([
    [1, 1, 1],
    [2, 1, 2],
    [3, 2, 6],
    [4, 3, 12],
    [5, 10, 50],
  ])('%i * %i', (a, b, expected) => {
    expect(runner(`${a} * ${b}`)).toBe(expected)
  })

  it.each([
    [1, 1, 2],
    [2, 1, 3],
    [3, 2, 5],
    [4, 3, 7],
    [5, 10, 15],
  ])('%i + %i', (a, b, expected) => {
    expect(runner(`${a} + ${b}`)).toBe(expected)
  })

  it.each([
    [1, 1],
    [2, 2],
    [3, 6],
    [4, 24],
    [5, 120],
  ])('%i !', (a, expected) => {
    expect(runner(`${a} !`)).toBe(expected)
  })

  it.each([
    [1, 1],
    [2, 4],
    [3, 9],
    [4, 16],
    [5, 25],
  ])('%i **', (a, expected) => {
    expect(runner(`${a} **`)).toBe(expected)
  })

  it.each([
    [1, 1, 1],
    [1, 2, 0.5],
    [2, 1, 2],
    [2, 2, 1],
    [120, 4, 30],
  ])('%i / %i', (a, b, expected) => {
    expect(runner(`${a} / ${b}`)).toBe(expected)
  })

  it.each([
    [1, 1, 1],
    [1, 2, 1],
    [2, 1, 2],
    [2, 2, 4],
    [4, 4, 256],
  ])('%i ^ %i', (a, b, expected) => {
    expect(runner(`${a} ^ ${b}`)).toBe(expected)
  })
})

describe('Runner tripled/mixed cases', () => {
  it('2 * 2 * 3', () => {
    expect(runner('2 * 2 * 3')).toEqual(12)
  })

  it('2 * 2 + 3', () => {
    expect(runner('2 * 2 + 3')).toEqual(7)
  })

  it('2 + 2 * 3', () => {
    expect(runner('2 + 2 * 3')).toEqual(8)
  })

  it('5 ! + 2', () => {
    expect(runner('5 ! + 2')).toEqual(122)
  })

  it('5 ! + 2 * 3', () => {
    expect(runner('5 ! + 2 * 3')).toEqual(126)
  })

  it('5 ** + 2', () => {
    expect(runner('5 ** + 2')).toEqual(27)
  })

  it('5 ^ 3 + 8', () => {
    expect(runner('5 ^ 3 + 8')).toEqual(133)
  })

  it('4 ^ 4 + 2 * 5', () => {
    expect(runner('4 ^ 4 + 2 * 5')).toEqual(266)
  })

  it('2 * 2 ^ 4', () => {
    expect(runner('2 * 2 ^ 4')).toEqual(32)
  })
})

describe('Runner long cases', () => {
  it('20 + 1 * 10 - 5 * 3', () => {
    expect(runner('20 + 1 * 10 - 5 * 3')).toEqual(15)
  })

  it('20 - 10 * 10 / 5 - 3', () => {
    expect(runner('20 - 10 * 10 / 5 - 3')).toEqual(-3)
  })

  it('2 * 2 ^ 4 + 3 ** * 4', () => {
    expect(runner('2 * 2 ^ 4 + 3 ** * 4')).toEqual(68)
  })
})
