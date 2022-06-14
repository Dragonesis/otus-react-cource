import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PlayingField, StartScreen } from './views'
import { ProtectPath } from '@/views/components'
import { useStore } from './services/adapters/store'

export const App = () => {
  const { user } = useStore()

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectPath condition={!!user} to={'/auth'}>
              <PlayingField />
            </ProtectPath>
          }
        ></Route>
        <Route
          path="/auth"
          element={
            <ProtectPath condition={!user} to={'/'}>
              <StartScreen />
            </ProtectPath>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  )
}
