import React from 'react'
import { useStore } from '@/services/adapters/store'
import { putTheCardsInHand } from '@/application'
import styled from '@emotion/styled'

export const Deck = () => {
  const { cardDeck, cardsInHand, setDeckOfCard, setCardsInHand } = useStore()

  if (!cardDeck) {
    return <h6>Нет колоды</h6>
  }
  return (
    <Core
      onClick={() => putTheCardsInHand(cardDeck, cardsInHand, setDeckOfCard, setCardsInHand)}
      aria-label={`Колода ${cardDeck.name}`}>
      <Name>{cardDeck.name}</Name>
      <Count>{cardDeck.cards.length}</Count>
    </Core>
  )
}

const Core = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
  width: 260px;
  height: 300px;
  border-radius: 4px;
`
const Name = styled.div`
  font-size: 18px;
`
const Count = styled.div`
  font-size: 18px;
`
