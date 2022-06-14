import React, { FC } from 'react'
import styled from '@emotion/styled'
import { User } from '@/services/models'

import { useStore } from '@/services/adapters/store'
import { Deck, Hand, Header } from './components'


export const PlayingField: FC = () => {
  const { user } = useStore()

  return (
    <>
      <Header name={user?.name || ''} />
      <Area>
        <ModDeck />
        <ModHand />
      </Area>
    </>
  )
}

const Area = styled.div`
  display: flex;
  align-items: flex-end;
  max-width: 800px;
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
`

const ModDeck = styled(Deck)`
  margin-right: 20px;
`

const ModHand = styled(Hand)`
`