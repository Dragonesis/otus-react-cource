import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Unit } from '@/services/models'
import { checkingCardAttributes } from '@/testsHelpers'

import { Card } from './Card'

const defaultUnitData: Unit = {
  id: 'id',
  name: 'Test',
  power: 10,
  defense: 20,
  className: 'magician',
}

test('Card renders correctly', () => {
  const handleClick = jest.fn()
  const { asFragment } = render(<Card unit={defaultUnitData} handleClick={handleClick} />)
  expect(asFragment()).toMatchSnapshot()
})

test('Card displays the declared data', () => {
  const handleClick = jest.fn()
  render(<Card unit={defaultUnitData} handleClick={handleClick} />)
  checkingCardAttributes(defaultUnitData)
})

test('Card click handling', () => {
  const handleClick = jest.fn()
  render(<Card unit={defaultUnitData} handleClick={handleClick} />)
  const card = screen.queryAllByLabelText('Карта Test')
  fireEvent.click(card[0])
  expect(handleClick).toHaveBeenCalled()
})
