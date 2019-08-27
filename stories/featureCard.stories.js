// FeatureCard
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, color } from '@storybook/addon-knobs'
import FeatureCard from '../src/components/FeatureCard'

const stories = storiesOf('Components | Cards', module)

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs)

stories.add(
  'FeatureCard without media',
  () => (
    <FeatureCard
      title={text('Title', 'Proactive')}
      body={text(
        'Body',
        `We know that supporting employees before they are in crisis is faster
    and more effective in creating lasting change for their wellbeing
    and resilience`
      )}
    ></FeatureCard>
  ),
  { notes: { markdown: `##Heading1\n For page heading` } }
)
