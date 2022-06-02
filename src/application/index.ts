import { clone } from 'ramda'
import { DeckOfCard, Unit } from '@/services/models'

export const getDeckOfCard = (deckOfCardList: DeckOfCard[]): DeckOfCard => {
  const lengthDeckOfCardList = deckOfCardList.length
  const selectedIndex = Math.floor(Math.random() * lengthDeckOfCardList)
  return clone(deckOfCardList[selectedIndex])
}

export const toHand = (
  cardsInDeck: Unit[],
  cardsInHand: Unit[],
  number: number,
): {
  cardsInDeck: Unit[]
  cardsInHand: Unit[]
} => {
  if (number) {
    const lengthDeckOfCard = cardsInDeck.length
    const selectedIndex = Math.floor(Math.random() * lengthDeckOfCard)
    cardsInHand.push(cardsInDeck[selectedIndex])
    cardsInDeck.splice(selectedIndex, 1)
    number -= 1
    return toHand(cardsInDeck, cardsInHand, number)
  }
  return { cardsInDeck, cardsInHand }
}

export const putTheCardsInHand = (
  deckOfCard: DeckOfCard,
  cardsInHand: Unit[],
  setDeckOfCard: (arg: DeckOfCard) => void,
  setCardsInHand: (arg: Unit[]) => void,
) => {
  const requiredQuantity = Math.abs(cardsInHand.length - 3)

  if (!requiredQuantity || !deckOfCard.cards.length) {
    return
  }

  const possibleQuantity = deckOfCard.cards.length >= requiredQuantity ? requiredQuantity : deckOfCard.cards.length

  const { cardsInDeck: inDeck, cardsInHand: inHand } = toHand(
    clone(deckOfCard.cards),
    clone(cardsInHand),
    possibleQuantity,
  )
  deckOfCard.cards = inDeck
  setDeckOfCard(deckOfCard)
  setCardsInHand(inHand)
}
