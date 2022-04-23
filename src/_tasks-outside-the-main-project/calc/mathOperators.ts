export type ScalarOperationType = (first: number, second?: number) => number

export const mul: ScalarOperationType = (first, second) => first * (second || 0)

export const div: ScalarOperationType = (first, second) => first / (second || 0)

export const add: ScalarOperationType = (first, second) => first + (second || 0)

export const minus: ScalarOperationType = (first, second) => first - (second || 0)

export const power: ScalarOperationType = (first, second) => first ** (second || 0)

export const square: ScalarOperationType = (num) => num ** 2

export const factorial: ScalarOperationType = (num) => {
  if (num === 0 || num === 1) {
    return 1
  }

  let result = 1

  for (let i = 2; i <= num; i++) {
    result *= i
  }

  return result
}

export const mathOperators: {
  [key: string]: ScalarOperationType
} = {
  '*': mul,
  '/': div,
  '+': add,
  '-': minus,
  '**': square,
  '^': power,
  '!': factorial,
}

export const mathPriorities: number[] = [1, 2, 3, 4]

const [UNARY, FIRST, SECOND, THIRD] = mathPriorities

export const mathOperatorsPriorities: { [key: string]: number } = {
  '*': SECOND,
  '/': SECOND,
  '+': THIRD,
  '-': THIRD,
  '**': UNARY,
  '^': FIRST,
  '!': UNARY,
}
