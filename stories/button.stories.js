import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import {
  PrimaryButton,
  OutLineButton,
  LinkButton,
  RoundButton
} from '../src/styles/buttons'

const stories = storiesOf('Components | Button', module)

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs)

stories
  .add(
    'Primary button',
    () => (
      <PrimaryButton
        secondary={boolean('secondary', false)}
        onClick={action('clicked')}
      >
        {text('Label', 'Book a demo')}
      </PrimaryButton>
    ),
    { notes: { markdown: `##Primary button\n For primary call to action` } }
  )
  .add(
    'Link button',
    () => (
      <LinkButton
        secondary={boolean('secondary', false)}
        onClick={action('clicked')}
      >
        {text('Label', 'See reports')}
      </LinkButton>
    ),
    { notes: { markdown: `##Link button\n For use as link` } }
  )
  .add(
    'Outline button',
    () => (
      <OutLineButton
        secondary={boolean('secondary', false)}
        onClick={action('clicked')}
      >
        {text('Label', 'See reports')}
      </OutLineButton>
    ),
    { notes: { markdown: `##Outline button\n For secondary call to action` } }
  )
  .add(
    'Rounded button',
    () => (
      <RoundButton
        isActive={boolean('isActive', false)}
        onClick={action('clicked')}
      >
        {text('Label', 'See reports')}
      </RoundButton>
    ),
    {
      notes: {
        markdown: `##Rounded button\n For more playful call to action \n Like used for category menu in blog`
      }
    }
  )
