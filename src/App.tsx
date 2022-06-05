import React, { StrictMode, useState } from 'react'
import { Store } from '@/services/adapters/store'
import { User } from '@/services/models'
import { PlayingField, StartScreen } from './views'
import '@/assets/styles/main.css'

export const App = () => {
  const [user, setUser] = useState<User>()
  return (
    <Store>
      {user ? (
        <StrictMode>
          <PlayingField user={user} />
        </StrictMode>
      ) : (
        <StartScreen setUser={setUser} />
      )}
    </Store>
  )
}
