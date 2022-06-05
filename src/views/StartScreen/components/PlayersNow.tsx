import React from 'react'
import styled from '@emotion/styled'

export interface PlayersNowProps {
  countGamer: number
}
export interface PlayersNowState {}

export class PlayersNow extends React.Component<PlayersNowProps, PlayersNowState> {
  constructor(props: PlayersNowProps) {
    super(props)

    this.state = {
      countGamer: 0,
    } as PlayersNowState
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
