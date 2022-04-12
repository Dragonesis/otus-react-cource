import { runner } from './runner'

describe('Runner single argument cases', () => {
  it('5', () => {
    expect(runner('5')).toEqual(5)
  })
})

describe('Runner simple cases', () => {
  it('1 * 32', () => {
    expect(runner('1 * 32')).toEqual(32)
  })

  it('2 * 32', () => {
    expect(runner('2 * 32')).toEqual(64)
  })

  it('2 + 32', () => {
    expect(runner('2 + 32')).toEqual(34)
  })

  it('5 !', () => {
    expect(runner('5 !')).toEqual(120)
  })

  it('5 **', () => {
    expect(runner('5 **')).toEqual(25)
  })

  it('4 ^ 4', () => {
    expect(runner('4 ^ 4')).toEqual(256)
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
