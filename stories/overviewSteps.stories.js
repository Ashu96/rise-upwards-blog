// FeatureCard
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, color, number } from '@storybook/addon-knobs'
import Step from '../src/components/step'
import '../src/components/layout.css'
import '../src/styles/bootstrap-grid-utils.css'

const stories = storiesOf('Components | Tour', module)

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs)

const props = {
  title: 'Early Assessments',
  body:
    'Uprise makes checking in on your wellbeing a regular part of your routine. Every month employees are encouraging to check in with a quick wellbeing or stress assessment and offered tips to managing a particular stressor.',
  stepNumber: 1,
  showStepNumber: true,
  image: {
    base64:
      'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAQABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMBBf/EABYBAQEBAAAAAAAAAAAAAAAAAAIBA//aAAwDAQACEAMQAAAB7s8KWSZr/8QAGBABAQADAAAAAAAAAAAAAAAAAQASIUH/2gAIAQEAAQUCWyY3dSBv/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQMBAT8BR//EABYRAQEBAAAAAAAAAAAAAAAAAAARYf/aAAgBAgEBPwFcf//EABgQAQEAAwAAAAAAAAAAA...',
    aspectRatio: 1.2835443037974683,
    src:
      '/static/d09ab0989f4c35b3efae6e83dc03f55c/8bf7b/c5896217ccffb4d3eb54486a5013c40f.jpg',
    srcSet:
      '/static/d09ab0989f4c35b3efae6e83dc03f55c/65da8/c5896217ccffb4d3eb54486a5013c40f.jpg 121w,\n/static/d09ab0989f4c35b3efae6e83dc03f55c/e6ab4/c5896217ccffb4d3eb54486a5013c40f.jpg 243w,\n/static/d09ab0989f4c35b3efae6e83dc03f55c/8bf7b/c5896217ccffb4d3eb54486a5013c40f.jpg 485w,\n/static/d09ab0989f4c35b3efae6e83dc03f55c/bd666/c5896217ccffb4d3eb54486a5013c40f.jpg 728w,\n/static/d09ab0989f4c35b3efae6e83dc03f55c/bb225/c5896217ccffb4d3eb54486a5013c40f.jpg 970w,\n/static/d09ab0989f4c35b3efae6e83dc03f55c/33c4d/c58...',
    sizes: '(max-width: 485px) 100vw, 485px'
  }
}

stories.add(
  'Step with media',
  () => (
    <div style={{ maxWidth: 1160 }}>
      <Step
        title={text('Title', props.title)}
        body={text('Body', props.body)}
        image={props.image}
        showStepNumber={boolean('showStepNumber', props.showStepNumber)}
        stepNumber={number('stepNumber', props.stepNumber)}
      ></Step>
    </div>
  ),
  { notes: { markdown: `##Step\n For product overview or implementation step` } }
)
