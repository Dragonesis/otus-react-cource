import React, { Component, ErrorInfo, ReactNode } from 'react'

export interface ErrorBoundaryProps {
  children: ReactNode
}

export interface ErrorBoundaryState {
  isError: boolean
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)

    this.state = {
      isError: false,
    } as ErrorBoundaryState
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { isError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Необработанная ошибка:', error, errorInfo)
  }

  render() {
    if (this.state.isError) {
      return <h1>Что-то пошло не так...</h1>
    }

    return this.props.children
  }
}
