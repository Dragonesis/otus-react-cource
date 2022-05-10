import React from 'react'
import { render } from '@testing-library/react'
import { StoreContext } from '@/services/adapters/store'
import { DeckOfCard, Unit } from '@/services/models'

export const customRender = (
  children: React.ReactNode,
  {
    providerProps,
    ...renderOptions
  }: {
    providerProps: {
      cardDeck: DeckOfCard | undefined
      cardsInHand: Unit[]
      setDeckOfCard: (arg: DeckOfCard) => DeckOfCard
      setCardsInHand: (arg: Unit[]) => Unit[]
    }
  },
) => {
  return render(<StoreContext.Provider value={providerProps}>{children}</StoreContext.Provider>, renderOptions)
}
