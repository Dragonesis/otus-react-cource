import React from 'react'
import { render } from '@testing-library/react'

import { StartScreen } from './StartScreen'

describe('### StartScreen', () => {
  test('StartScreen renders correctly', () => {
    const { asFragment } = render(<StartScreen />)
    expect(asFragment()).toMatchSnapshot()
  })
})
