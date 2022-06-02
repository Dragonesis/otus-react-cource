import React from 'react'
import { withReactContext } from 'storybook-react-context'
import { Story, Meta } from '@storybook/react'
import { StoreContext } from '@/services/adapters/store'
import { deckOfCardList } from '@/services/mocks'
import { PlayingField } from './PlayingField'

export default {
  title: 'PlayingField/PlayingField',
  component: PlayingField,
  decorators: [
    withReactContext({
      Context: StoreContext,
      initialState: {
        cardDeck: deckOfCardList[0],
        cardsInHand: [],
      },
    }),
  ],
} as Meta

const Template: Story = () => <PlayingField />
export const HandExample = Template.bind({})
