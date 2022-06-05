import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'

import { Form } from './Form'

describe('### Form', () => {
  const setUser = jest.fn()
  const onMouseEnter = jest.fn()
  const onMouseLeave = jest.fn()
  test('Form renders correctly', () => {
    const { asFragment } = render(<Form setUser={setUser} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />)
    expect(asFragment()).toMatchSnapshot()
  })
  test('StartScreen setUser test', () => {
    const setUser = jest.fn()
    const onMouseEnter = jest.fn()
    const onMouseLeave = jest.fn()
    const { container } = render(<Form setUser={setUser} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}/>)

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
    }
  })
})
