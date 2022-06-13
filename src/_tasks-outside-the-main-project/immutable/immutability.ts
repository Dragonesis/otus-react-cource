// Задание 1
export type OriginalTeam = {
  size: number
  name: string
  league: string
}

export type ExpectedTeam = {
  name: string
  league: string
  roster: number
}

type t = keyof Pick<OriginalTeam, 'name' | 'league'>

export const originalTeamToExpectedTeam = (originalTeam: OriginalTeam): ExpectedTeam => {
  const newObject = (['name', 'league'] as t[]).reduce((acc, val) => {
    acc[val] = originalTeam[val]
    return acc
  }, {} as Record<t, string>)

  return { ...newObject, name: 'New York Badgers', roster: 25 }
}

// Задание 2
type SomeArray = Array<number | string>

export const originalArrayToExpectedArray = (originalArray: readonly number[]): SomeArray => {
  return ['two', ...originalArray.slice(2), 5]
}

// Задание 3
export type Team = {
  name: string
  captain: {
    name: string
    age: number
  }
}

export const originalTeamToExpectedTeamSecond = (originalTeam: Team): Team => {
  return { ...originalTeam, captain: { ...originalTeam.captain, age: 28 } }
}
