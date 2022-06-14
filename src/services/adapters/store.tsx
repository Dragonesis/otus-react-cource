import React, { FC, useState, PropsWithChildren, useEffect } from 'react'
import { useContext } from 'react'
import { DeckOfCard, Unit, User } from '@/services/models'

export interface StoreContextResult {
  // Undefined это значение по умолчанию, DeckOfCard и null устанавливаемые значения
  cardDeck?: DeckOfCard | null
  cardsInHand: Unit[]
  user: User | null
  setDeckOfCard: (arg: DeckOfCard | null) => void
  setCardsInHand: (arg: Unit[]) => void
  setUser: (arg: User | null) => void
}

export const StoreContext = React.createContext({} as StoreContextResult)
export const useStore = () => useContext(StoreContext)

export const Store: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [cardDeck, setDeckOfCard] = useState<DeckOfCard | undefined>(undefined)
  const [cardsInHand, setCardsInHand] = useState<Unit[]>([])
  const [user, setUser] = useState<User | null>(() => {
    const user = localStorage.getItem('user')
    if (user) {
      return JSON.parse(user)
    }
    return null
  })

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])

  const value = {
    cardDeck,
    cardsInHand,
    setDeckOfCard,
    setCardsInHand,
    setUser,
    user,
  }

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}
