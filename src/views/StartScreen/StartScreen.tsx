import React from 'react'
import styled from '@emotion/styled'
import { req, endpoints } from '@/services/adapters/axios'
import { ErrorBoundary } from '@/views/components'
import { PlayersNow, IconCards } from './components'

export interface StartScreenProps {
  setUser: (arg: string) => void
}

export interface StartScreenState {
  countGamer: number
  isDisplayFakeCursor: boolean
  cordsIcon: {
    x: string
    y: string
  }
}

export class StartScreen extends React.Component<StartScreenProps, StartScreenState> {
  timer!: ReturnType<typeof setTimeout>

  constructor(props: StartScreenProps) {
    super(props)
    this.state = {
      countGamer: 0,
      isDisplayFakeCursor: true,
      cordsIcon: { x: '0px', y: '-200%' },
    } as StartScreenState
  }

  async componentDidMount() {
    await req(endpoints.fakeOnline, (data: { ccv: number }) => {
      this.setState({ countGamer: data.ccv })
    })
    document.addEventListener('mousemove', this.handlerMouseEvent)
  }

  componentDidUpdate(prevProps: StartScreenProps, prevState: StartScreenState) {
    if (this.state.countGamer !== prevState.countGamer) {
      this.timer = setTimeout(() => {
        req(endpoints.fakeOnline, (data: { ccv: number }) => {
          this.setState({ countGamer: data.ccv })
        })
      }, 1000)
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
    document.removeEventListener('mousemove', this.handlerMouseEvent)
  }

  handlerMouseEvent = (e: MouseEvent) => {
    this.setState({ cordsIcon: { y: e.clientY + 'px', x: e.clientX + 'px' } })
  }

  render() {
    const { isDisplayFakeCursor, countGamer, cordsIcon } = this.state
    return (
      <ErrorBoundary>
        <Core>
          <FakeCursor x={cordsIcon.x} y={cordsIcon.y} isShow={isDisplayFakeCursor} />
          <Title>Добро пожаловать!</Title>
          <Descr>Нажимай на кнопку и врывайся в игру!</Descr>
          <PlayersNow countGamer={countGamer} />
          <Action
            onClick={() => this.props.setUser('Jeremy Yanders')}
            onMouseEnter={() => this.setState({ isDisplayFakeCursor: false })}
            onMouseLeave={() => this.setState({ isDisplayFakeCursor: true })}
            data-testid='action-in-games'
          >
            В игру
          </Action>
        </Core>
      </ErrorBoundary>
    )
  }
}

const Core = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  cursor: none;
  overflow: hidden;
`

const Title = styled.h1`
  font-size: 30px;
`

const Descr = styled.p`
  font-size: 18px;
  margin-top: 10px;
`

interface FakeCursorProps {
  isShow: boolean
  x: string
  y: string
}

const FakeCursor = styled(IconCards)<FakeCursorProps>`
  transition: opacity 0.1s ease-in-out;
  position: absolute;
  pointer-events: none;
  transform: translate(-50%, -50%);
  opacity: ${(props) => (props.isShow ? 1 : 0)};
  top: ${(props) => props.y};
  left: ${(props) => props.x}; ;
`

const Action = styled.button`
  border-radius: 6px;
  background-color: #3a3a3a;
  color: #fff;
  height: 60px;
  width: 210px;
  margin-top: 20px;
  font-size: 20px;
`
