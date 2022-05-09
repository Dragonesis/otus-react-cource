import React from 'react'
import styled from '@emotion/styled'
import { deckOfCardList } from '@/services/mocks'
import { getDeckOfCard } from '@/application'

import { useStore } from '@/services/adapters/store'

import { Deck } from './components/Deck'
import { Hand } from './components/Hand'

export const PlayingField = () => {
  const { setDeckOfCard, setCardsInHand } = useStore()

  return (
    <>
      <Action
        onClick={() => {
          setDeckOfCard(getDeckOfCard(deckOfCardList))
          setCardsInHand([])
        }}>
        Новая колода
      </Action>
      <Deck />
      <Hand />
    </>
  )
}

const Action = styled.button`
  font-size: 18px;
  width: 150px;
  border-radius: 2px;
  border: 1px solid #000;
`
