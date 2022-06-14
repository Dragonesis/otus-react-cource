import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { customRender } from '@/support/testsHelpers'

import { Form } from './Form'

describe('### Form', () => {
  let mutateUser: {[key: string]: string} = {}
  const expectUser = {
    name: 'test',
    email: 'test@ya',
    birthday: '10.01.1999',
  }
  const setDeckOfCard = jest.fn()
  const setCardsInHand = jest.fn()
  const setUser = jest.fn((e) => mutateUser = e)

  const providerProps = {
    cardDeck: undefined,
    cardsInHand: [],
    setDeckOfCard,
    setCardsInHand,
    user: null,
    setUser,
  }

  const onMouseEnter = jest.fn()
  const onMouseLeave = jest.fn()

  test('Form renders correctly', () => {
    const { asFragment } = render(<Form onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('Form submit', () => {
    const onMouseEnter = jest.fn()
    const onMouseLeave = jest.fn()
    const { container } = customRender(<Form onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />, { providerProps })

    const name = screen.getByPlaceholderText('Имя')
    const email = screen.getByPlaceholderText('Email')
    const birthday = screen.getByPlaceholderText('День рождения')
    fireEvent.change(name, { target: { value: 'test' } })
    fireEvent.change(email, { target: { value: 'test@ya' } })
    fireEvent.change(birthday, { target: { value: '10.01.1999' } })

    const action = container.querySelector('[data-testid="action-in-games"]')
    expect(action).toBeInTheDocument()
    if (action) {
      fireEvent.click(action)
      expect(setUser).toHaveBeenCalled()
      expect(mutateUser).toStrictEqual(expectUser)
    }
  })

  test('Validation', () => {
    const { container } = customRender(<Form onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />, { providerProps })

    const action = container.querySelector('[data-testid="action-in-games"]')
    expect(action).toBeInTheDocument()
    if (action) {
      fireEvent.click(action)
      expect(setUser).not.toHaveBeenCalled()
    }
  })
})
