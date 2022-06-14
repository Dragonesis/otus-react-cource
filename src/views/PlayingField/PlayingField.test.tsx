import React from 'react'
import { render } from '@testing-library/react'

import { PlayingField } from './PlayingField'

describe('### PlayingField', () => {
  test('Renders correctly', () => {
    const { asFragment } = render(<PlayingField />)
    expect(asFragment()).toMatchSnapshot()
  })
})
