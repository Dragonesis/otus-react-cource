import React from 'react'
import { render, screen } from '@testing-library/react'
import { deckOfCardList } from '@/services/mocks'
import { customRender, checkingCardAttributes } from '@/support/testsHelpers'

import { Hand } from './Hand'

test('Hand renders correctly', () => {
  const { asFragment } = render(<Hand />)
  expect(asFragment()).toMatchSnapshot()
})

describe('Hand with cards available', () => {
  const setDeckOfCard = jest.fn()
  const setCardsInHand = jest.fn()

  const cards = deckOfCardList[0].cards

  const providerProps = {
    cardDeck: undefined,
    cardsInHand: [cards[0], cards[1], cards[2]],
    setDeckOfCard,
    setCardsInHand,
  }

  customRender(<Hand />, { providerProps })
  const cardsOnScreen = screen.queryAllByLabelText(/Карта/i)
  expect(cardsOnScreen).toHaveLength(3)

  it.each([[cards[0]], [cards[1]], [cards[2]]])('%s', (unit) => {
    customRender(<Hand />, { providerProps })
    checkingCardAttributes(unit)
  })
})
