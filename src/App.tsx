import React, { StrictMode } from 'react'
import { Store } from '@/services/adapters/store'
import { PlayingField } from './views'
import '@/assets/styles/main.css'

export const App = () => {
  return (
    <Store>
      <StrictMode>
        <PlayingField />
      </StrictMode>
    </Store>
  )
}
