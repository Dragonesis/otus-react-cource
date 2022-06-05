export interface Unit {
  id: string
  name: string
  power: number
  defense: number
  className: 'healer' | 'magician' | 'warrior'
}

export type DeckOfCard = {
  id: string
  name: string
  cards: Unit[]
}

export type DeckOfCardList = DeckOfCard[]

export interface User {
  name: string
  email: string
  birthday: string
}
