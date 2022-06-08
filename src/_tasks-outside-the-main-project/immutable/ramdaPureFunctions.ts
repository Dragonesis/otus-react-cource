import { compose, sort, concat, join, toPairsIn, map, split, tail, fromPairs } from 'ramda'

// Задание 1
export type Team = { name: string; score: number }

function getName(team: Team) {
  return team.name
}

function sortTeams(teams: Team[]) {
  const diff = function (a: Team, b: Team) {
    return b.score - a.score
  }
  return sort(diff, teams)[0]
}

export const getTopName = (teams: Team[]): string => compose(getName, sortTeams)(teams)

// Задание 2
export type QsObj = Record<string, string | number | boolean | object>

function objectToArray(arrayFromObject: [string, string][]) {
  return map(([key, val]) => `${key}=${val}`, arrayFromObject)
}

export const createQs = (qsObj: QsObj): string => compose(concat('?'), join('&'), objectToArray, toPairsIn)(qsObj)

// Задание 3
export function preparingParameterString(qs: string) {
  return qs[0] === '?' ? tail(qs) : qs
}

function getObjectForResult(listWithPairs: [a: string, b: string][]) {
  return fromPairs(listWithPairs)
}

function getArrayWithPairs(list: Array<string>): [a: string, b: string][] {
  return map(split('='), list)
}

export const parseQs = (qs: string): QsObj =>
  compose(getObjectForResult, getArrayWithPairs, split('&'), preparingParameterString)(qs)
