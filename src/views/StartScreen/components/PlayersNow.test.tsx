import React from 'react'
import { render, screen } from '@testing-library/react'

import { PlayersNow } from './PlayersNow'

describe('### PlayersNow', () => {
  test('PlayersNow renders correctly', () => {
    const { asFragment } = render(<PlayersNow countGamer={200} />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('PlayersNow displays the declared data', () => {
    render(<PlayersNow countGamer={200} />)
    expect(screen.getByText('Игроков в онлайне: 200')).toBeInTheDocument()
    render(<PlayersNow countGamer={300} />)
    expect(screen.getByText('Игроков в онлайне: 300')).toBeInTheDocument()
  })

  test('PlayersNow rerender', () => {
    const { rerender } = render(<PlayersNow countGamer={200} />)
    rerender(<PlayersNow countGamer={200} />)
  })
})
