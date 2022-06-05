import React from 'react'
import styled from '@emotion/styled'

export interface PlayersNowProps {
  countGamer: number
}
export class PlayersNow extends React.Component<PlayersNowProps, never> {
  constructor(props: PlayersNowProps) {
    super(props)
  }

  shouldComponentUpdate = (nextProps: PlayersNowProps): boolean => {
    return nextProps.countGamer !== this.props.countGamer
  }

  render() {
    const { countGamer } = this.props
    return <Core>Игроков в онлайне: {countGamer}</Core>
  }
}

const Core = styled.p`
  font-size: 22px;
  margin-top: 16px;
`
