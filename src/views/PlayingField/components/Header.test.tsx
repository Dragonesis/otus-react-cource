import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { customRender } from '@/support/testsHelpers'

import { Header } from './Header'

describe('### Header', () => {
  const setDeckOfCard = jest.fn()
  const setCardsInHand = jest.fn()

  const providerProps = {
    cardDeck: undefined,
    cardsInHand: [],
    setDeckOfCard,
    setCardsInHand,
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

})