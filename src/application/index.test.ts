import { clone } from 'ramda'
import { Unit, DeckOfCard } from '@/services/models'
import { deckOfCardList } from '@/services/mocks'
import { getDeckOfCard, toHand, putTheCardsInHand } from './index'

test('Getting a new deck of cards', () => {
  const deckOfCard = getDeckOfCard(deckOfCardList)
  expect(deckOfCard).toBeDefined()
  expect(deckOfCard.id).toBeDefined()
  const selectedDeck = deckOfCardList.find(({ id }) => id === deckOfCard.id)
  expect(deckOfCard).toStrictEqual(selectedDeck)
})

describe('A set of cards from the deck to the hand', () => {
  const selectedDeck = clone(deckOfCardList[0])
  const cards = selectedDeck.cards
  const selectedDeckLength = cards.length

  test.each([
    [[], selectedDeckLength - 3, 3],
    [[cards[0]], selectedDeckLength - 6, 4],
    [[cards[0], cards[1]], selectedDeckLength - 9, 5],
  ])('Case %#', (initialCardsInHand, expectForCardsInDeck, expectedForCardsInHand) => {
    const { cardsInDeck, cardsInHand } = toHand(cards, initialCardsInHand, 3)
    expect(cardsInDeck).toHaveLength(expectForCardsInDeck)
    expect(cardsInHand).toHaveLength(expectedForCardsInHand)
  })
})

test('Checking the exit from the "toHand" function', () => {
  const selectedDeck = clone(deckOfCardList[0])
  const cards = selectedDeck.cards
  const { cardsInDeck, cardsInHand } = toHand(cards, [], 0)
  expect(cardsInDeck).toHaveLength(12)
  expect(cardsInHand).toHaveLength(0)
})

test('Setting cards in the deck and hand', () => {
  let selectedDeck = clone(deckOfCardList[0])
  let cardsInHand: Unit[] = []
  const setDeckOfCard = (deck: DeckOfCard) => (selectedDeck = deck)
  const setCardsInHand = (cards: Unit[]) => (cardsInHand = cards)
  putTheCardsInHand(selectedDeck, [], setDeckOfCard, setCardsInHand)
  expect(selectedDeck.cards).toHaveLength(9)
  expect(cardsInHand).toHaveLength(3)
})

test('Testing the interrupt of the "putTheCardsInHand" function', () => {
  let selectedDeck = clone(deckOfCardList[0])
  const cards = selectedDeck.cards
  let cardsInHand: Unit[] = []
  const setDeckOfCard = (deck: DeckOfCard) => (selectedDeck = deck)
  const setCardsInHand = (cards: Unit[]) => (cardsInHand = cards)

  const resultForFullSetCardsInHand = putTheCardsInHand(
    selectedDeck,
    [cards[0], cards[1], cards[2]],
    setDeckOfCard,
    setCardsInHand,
  )
  expect(selectedDeck.cards).toHaveLength(12)
  expect(cardsInHand).toHaveLength(0)
  expect(resultForFullSetCardsInHand).toBeUndefined()

  selectedDeck.cards = []
  const resultForEmptyDeck = putTheCardsInHand(selectedDeck, [cards[0]], setDeckOfCard, setCardsInHand)
  expect(selectedDeck.cards).toHaveLength(0)
  expect(cardsInHand).toHaveLength(0)
  expect(resultForEmptyDeck).toBeUndefined()
})
