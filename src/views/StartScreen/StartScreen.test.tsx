import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { StartScreen } from './StartScreen'

test('StartScreen renders correctly', () => {
  const setUser = jest.fn()
  const { asFragment } = render(<StartScreen setUser={setUser} />)
  expect(asFragment()).toMatchSnapshot()
})

test('StartScreen setUser test', () => {
  const setUser = jest.fn()
  const { container } = render(<StartScreen setUser={setUser} />)
  const card = container.querySelector('[data-testid="action-in-games"]')
  expect(card).toBeInTheDocument()
  if (card) {
    fireEvent.click(card)
    expect(setUser).toHaveBeenCalled()
  }
})
