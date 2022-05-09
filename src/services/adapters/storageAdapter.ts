import { useStore } from './store'
import { deckOfCardList } from '@/services/mocks'
import { getDeckOfCard } from '@/application'

export function useNewDeck() {
  const store = useStore()
  store.setDeckOfCard(getDeckOfCard(deckOfCardList))
  store.setCardsInHand([])
}

export function useCardsInHand() {
  const store = useStore()
  store.setDeckOfCard(getDeckOfCard(deckOfCardList))
  store.setCardsInHand([])
}
