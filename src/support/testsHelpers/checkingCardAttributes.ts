import { screen } from '@testing-library/react'
import { Unit } from '@/services/models'

export const checkingCardAttributes = (unit: Unit) => {
  const card = screen.queryAllByLabelText('Карта ' + unit.name)[0]
  expect(card).toBeInTheDocument()
  expect(screen.getByText(unit.name)).toBeInTheDocument()
  expect(screen.getByText('Сила: ' + unit.power)).toBeInTheDocument()
  expect(screen.getByText('Защита: ' + unit.defense)).toBeInTheDocument()
  expect(screen.getByText('Класс: ' + unit.className)).toBeInTheDocument()
}
