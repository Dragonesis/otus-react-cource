import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import { StartScreen } from './StartScreen'

import { customRender } from '@/support/testsHelpers'

describe('### StartScreen', () => {
  test('StartScreen renders correctly', () => {
    const { asFragment } = render(<StartScreen />)
    expect(asFragment()).toMatchSnapshot()
  })
})
