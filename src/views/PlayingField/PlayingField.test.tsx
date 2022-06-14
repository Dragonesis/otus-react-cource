import React from 'react'
import { render } from '@testing-library/react'

import { PlayingField } from './PlayingField'

const user = { name: 'test', email: 'wdw@dwd', birthday: '1313' }

describe('### PlayingField', () => {
  test('Renders correctly', () => {
    const { asFragment } = render(<PlayingField user={user} />)
    expect(asFragment()).toMatchSnapshot()
  })
})