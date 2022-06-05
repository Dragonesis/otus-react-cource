import React, { FC } from 'react'
import styled from '@emotion/styled'
import { deckOfCardList } from '@/services/mocks'
import { getDeckOfCard } from '@/application'

import { useStore } from '@/services/adapters/store'

import { Deck } from './components/Deck'
import { Hand } from './components/Hand'

export interface PlayingFieldProps {
  user: string
}

export const PlayingField: FC<PlayingFieldProps> = ({ user }) => {
  const { setDeckOfCard, setCardsInHand } = useStore()

  return (
    <>
      <UserName>{user}</UserName>
      <Action
        onClick={() => {
          setDeckOfCard(getDeckOfCard(deckOfCardList))
          setCardsInHand([])
        }}
      >
        Новая колода
      </Action>
      <Deck />
      <Hand />
    </>
  )
}

const UserName = styled.p`
  font-size: 18px;
`
const Action = styled.button`
  font-size: 18px;
  width: 150px;
  border-radius: 2px;
  border: 1px solid #000;
`
