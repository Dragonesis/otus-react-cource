import React from 'react'
import { withReactContext } from 'storybook-react-context'
import { Story, Meta } from '@storybook/react'
import { StoreContext } from '@/services/adapters/store'
import { deckOfCardList } from '@/services/mocks'
import { Hand } from './Hand'

export default {
  title: 'PlayingField/Hand',
  component: Hand,
  decorators: [
    withReactContext({
      Context: StoreContext,
      initialState: {
        cardsInHand: [deckOfCardList[0].cards[0], deckOfCardList[0].cards[1], deckOfCardList[0].cards[2]],
      },
    }),
  ],
} as Meta

const Template: Story = () => <Hand />
export const HandExample = Template.bind({})
