import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { customRender } from '@/support/testsHelpers'

import { Header } from './Header'

describe('### Header', () => {
  const mutate: { [key: string]: string } = {
    deck: 'Testing string',
    hand: 'Testing string',
    user: 'Testing string',
  }

  const setDeckOfCard = jest.fn((e) => (mutate.deck = e))
  const setCardsInHand = jest.fn((e) => (mutate.hand = e))
  const setUser = jest.fn((e) => (mutate.user = e))

  const providerProps = {
    cardDeck: undefined,
    cardsInHand: [],
    setDeckOfCard,
    setCardsInHand,
    user: null,
    setUser,
  }

  test('renders correctly', () => {
    const { asFragment } = render(<Header name={'Test'} />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('start new game', () => {
    customRender(<Header name={'Test'} />, { providerProps })
    const action = screen.getByText('Новая игра')
    fireEvent.click(action)
    expect(setDeckOfCard).toHaveBeenCalled()
    expect(setCardsInHand).toHaveBeenCalled()
  })

  test('logout', () => {
    customRender(<Header name={'Test'} />, { providerProps })
    const action = screen.getByText('Выход')
    fireEvent.click(action)
    expect(setDeckOfCard).toHaveBeenCalled()
    expect(setCardsInHand).toHaveBeenCalled()
    expect(setUser).toHaveBeenCalled()
    expect(mutate).toStrictEqual({
      deck: null,
      hand: [],
      user: null,
    })
  })
})
