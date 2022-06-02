import React from 'react'
import { withReactContext } from 'storybook-react-context'
import { Story, Meta } from '@storybook/react'
import { StoreContext } from '@/services/adapters/store'
import { deckOfCardList } from '@/services/mocks'
import { Deck } from './Deck'

export default {
  title: 'PlayingField/Deck',
  component: Deck,
} as Meta

const Template: Story = () => <Deck />
export const DeckWithDeckOfCardExample = Template.bind({})
export const DeckWithoutDeckOfCardExample = Template.bind({})

DeckWithDeckOfCardExample.decorators = [
  withReactContext({
    Context: StoreContext,
    initialState: {
      cardDeck: deckOfCardList[0],
    },
  }),
]
