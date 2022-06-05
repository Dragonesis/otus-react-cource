import React from 'react'
import { render, screen } from '@testing-library/react'

import { ErrorBoundary } from './ErrorBoundary'
const Child = () => {
  throw new Error()
}

test('ErrorBoundary renders correctly', () => {
  const { asFragment } = render(<ErrorBoundary><h1>Test</h1></ErrorBoundary>)
  expect(asFragment()).toMatchSnapshot()
})

test('ErrorBoundary without error', () => {
  render(<ErrorBoundary><h1>Test</h1></ErrorBoundary>)
  expect(screen.getByText('Test')).toBeInTheDocument()
})

test('ErrorBoundary error', () => {
  render(<ErrorBoundary><Child /></ErrorBoundary>)
  expect(screen.getByText('Что-то пошло не так...')).toBeInTheDocument()
})
