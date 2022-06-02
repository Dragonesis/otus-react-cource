import React, { FC, ReactChild, useState } from 'react'
import { useContext } from 'react'
import { DeckOfCard, Unit } from '@/services/models'

export interface StoreContextResult {
  cardDeck?: DeckOfCard
  cardsInHand: Unit[]
  setDeckOfCard: (arg: DeckOfCard) => void
  setCardsInHand: (arg: Unit[]) => void
}

export const StoreContext = React.createContext<StoreContextResult>({})
export const useStore = () => useContext(StoreContext)

export interface ProviderProps {
  children: ReactChild
}

export const Store: FC<ProviderProps> = ({ children }) => {
  const [cardDeck, setDeckOfCard] = useState<DeckOfCard | undefined>(undefined)
  const [cardsInHand, setCardsInHand] = useState<Unit[]>([])

  const value = {
    cardDeck,
    cardsInHand,
    setDeckOfCard,
    setCardsInHand,
  }

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}
