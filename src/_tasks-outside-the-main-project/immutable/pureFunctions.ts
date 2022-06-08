// Задание 1
export type Team = { name: string; score: number }

export const getTopName = (teams: Team[]): string => {
  return teams.slice(0).sort((a, b) => b.score - a.score)[0].name
}

// Задание 2
export type QsObj = Record<string, string | number | boolean | object>

export const createQs = (qsObj: QsObj): string => {
  return (
    '?' +
    Object.entries(qsObj)
      .map(([key, val]) => `${key}=${val}`)
      .join('&')
  )
}

// Задание 3
export const parseQs = (qs: string): QsObj => {
  const newQs = qs[0] === '?' ? qs.slice(1) : qs
  return newQs.split('&').reduce((acc: { [key: string]: string | number | boolean }, val: string) => {
    const [key, value] = val.split('=')
    acc[key] = value
    return acc
  }, {})
}

export const parseQsAlt = (qs: string): QsObj => {
  const urlSearchParams = new URLSearchParams(qs)
  return Object.fromEntries(urlSearchParams.entries())
}
