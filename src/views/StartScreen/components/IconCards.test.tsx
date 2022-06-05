import React from 'react'
import { render } from '@testing-library/react'

import { IconCards } from './IconCards'

describe('### IconCards', () => {
  test('IconCards renders correctly', () => {
    const { asFragment } = render(<IconCards />)
    expect(asFragment()).toMatchSnapshot()
  })
  test('IconCards setting props', () => {
    const { container } = render(<IconCards className='test_class' />)
    expect(container.getElementsByClassName('test_class').length).toBe(1)
  })
})
