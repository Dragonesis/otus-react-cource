import React, { FC } from 'react'
import styled from '@emotion/styled'
import { useStore } from '@/services/adapters/store'
import { Card } from './Card'

export const Hand: FC = () => {
  const { cardsInHand, setCardsInHand } = useStore()

  return (
    <Core>
      {cardsInHand?.map((unit) => (
        <Card
          key={unit.id}
          unit={unit}
          handleClick={() => setCardsInHand(cardsInHand.filter(({ id }) => id !== unit.id))}
        />
      ))}
    </Core>
  )
}

const Core = styled.div`
  display: flex;
`
