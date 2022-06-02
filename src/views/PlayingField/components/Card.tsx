import React, { FC } from 'react'
import { Unit } from '@/services/models'
import styled from '@emotion/styled'

export interface CardProps {
  unit: Unit
  handleClick: () => void
}

export const Card: FC<CardProps> = ({ unit, handleClick }) => {
  return (
    <Core onClick={handleClick} aria-label={`Карта ${unit.name}`}>
      <Name>{unit.name}</Name>
      <Defense>Сила: {unit.power}</Defense>
      <Defense>Защита: {unit.defense}</Defense>
      <ClassName>Класс: {unit.className}</ClassName>
    </Core>
  )
}

const Core = styled.button`
  width: 110px;
  height: 180px;
  border-radius: 2px;
  border: 1px solid #000;
`
const Name = styled.div`
  font-size: 18px;
`
const Defense = styled.div`
  font-size: 14px;
`
const ClassName = styled.div`
  font-size: 14px;
`
