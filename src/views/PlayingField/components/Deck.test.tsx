import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { deckOfCardList } from '@/services/mocks'
import { DeckOfCard, Unit } from '@/services/models'
import { customRender } from '@/support/testsHelpers'

import { Deck } from './Deck'

test('Deck renders correctly', () => {
  const { asFragment } = render(<Deck />)
  expect(asFragment()).toMatchSnapshot()
})

test('Deck without cards', () => {
  const setDeckOfCard = jest.fn()
  const setCardsInHand = jest.fn()

  const providerProps = {
    cardDeck: undefined,
    cardsInHand: [],
    setDeckOfCard,
    setCardsInHand,
  }
  customRender(<Deck />, { providerProps })
  expect(screen.getByText('Нет колоды')).toBeInTheDocument()
})

test('Deck with cards', () => {
  const setDeckOfCard = jest.fn()
  const setCardsInHand = jest.fn()

  const deck = deckOfCardList[0]

  const providerProps = {
    cardDeck: deck,
    cardsInHand: [],
    setDeckOfCard,
    setCardsInHand,
  }
  customRender(<Deck />, { providerProps })
  expect(screen.queryByText('Нет колоды')).toBeNull()
  expect(screen.getByText(deck.name)).toBeInTheDocument()
  expect(screen.getByText(deck.cards.length)).toBeInTheDocument()
})

test('Deck size changes and set to hand', () => {
  const deck = deckOfCardList[0]
  let cardDeck: DeckOfCard = deck
  let cardsInHand: Unit[] = []
  const setDeckOfCard = jest.fn((newValue: DeckOfCard) => (cardDeck = newValue))
  const setCardsInHand = jest.fn((newValue: Unit[]) => (cardsInHand = newValue))

  const providerProps = {
    cardDeck: deck,
    cardsInHand: [],
    setDeckOfCard,
    setCardsInHand,
  }
  customRender(<Deck />, { providerProps })

  const deckEl = screen.queryAllByLabelText(`Колода ${deck.name}`)
  fireEvent.click(deckEl[0])

  expect(setDeckOfCard).toHaveBeenCalled()
  expect(setCardsInHand).toHaveBeenCalled()

  expect(cardDeck.cards).toHaveLength(9)
  expect(cardsInHand).toHaveLength(3)
})
