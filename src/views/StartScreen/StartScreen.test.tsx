import React from 'react'
import { render } from '@testing-library/react'

import { StartScreen } from './StartScreen'

test('StartScreen renders correctly', () => {
  const setUser = jest.fn()
  const { asFragment } = render(<StartScreen setUser={setUser} />)
  expect(asFragment()).toMatchSnapshot()
})
