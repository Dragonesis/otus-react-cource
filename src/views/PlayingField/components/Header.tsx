import React, { FC } from 'react'
import styled from '@emotion/styled'
import { Container, Button } from '@/ui'
import { useStore } from '@/services/adapters/store'
import { deckOfCardList } from '@/services/mocks'
import { getDeckOfCard } from '@/application'

export interface HeaderProps {
  name: string
}

export const Header: FC<HeaderProps> = ({ name }) => {
  const { setDeckOfCard, setCardsInHand, setUser } = useStore()

  return (
    <Core>
      <ModContainer>
        <Name>{name}</Name>
        <ActionNewGame
          variant='light'
          fixSize='s'
          onClick={() => {
            setDeckOfCard(getDeckOfCard(deckOfCardList))
            setCardsInHand([])
          }}
        >Новая игра</ActionNewGame>
        <ActionNewGame
          variant='light'
          fixSize='s'
          onClick={() => {
            setDeckOfCard(null)
            setCardsInHand([])
            setUser(null)
          }}
        >Выход</ActionNewGame>
      </ModContainer>
    </Core>
  )
}

const Core = styled.div`
  background-color: #3a3a3a;
  padding-top: 10px;
  padding-bottom: 10px;
`

const ModContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Name = styled.div`
  font-size: 18px;
  color: #fff;
  margin-right: auto;
`

const ActionNewGame = styled(Button)`
  font-size: 18px;
  margin-left: 10px;
`
