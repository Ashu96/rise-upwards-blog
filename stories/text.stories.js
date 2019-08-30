import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, color } from '@storybook/addon-knobs'
import {
	Heading1,
	Heading2,
	Heading3,
	Heading4,
	BodyText,
	Note
} from '../src/styles/text'

const stories = storiesOf('Components | Text', module)

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs)

stories
	.add(
		'Heading1',
		() => (
			<Heading1 textCenter={boolean('textCenter', true)}>
				{text('Text', 'Book a demo')}
			</Heading1>
		),
		{ notes: { markdown: '##Heading1\n For page heading' } }
	)
	.add(
		'Heading2',
		() => (
			<Heading2 textCenter={boolean('textCenter', true)}>
				{text('Text', 'Book a demo')}
			</Heading2>
		),
		{ notes: { markdown: '##Heading2\n For section heading' } }
	)
	.add(
		'Heading3',
		() => (
			<Heading3 textCenter={boolean('textCenter', true)}>
				{text('Text', 'Book a demo')}
			</Heading3>
		),
		{ notes: { markdown: '##Heading3\n For component heading' } }
	)
	.add(
		'Heading4',
		() => (
			<Heading4 textCenter={boolean('textCenter', true)}>
				{text('Text', 'Book a demo')}
			</Heading4>
		),
		{ notes: { markdown: '##Heading4\n For section heading' } }
	)
	.add(
		'BodyText',
		() => (
			<BodyText
				bold={boolean('bold', false)}
				textCenter={boolean('textCenter', true)}
				color={color('color', 'rgb(193, 192, 197)')}
			>
				{text('Text', 'Book a demo')}
			</BodyText>
		),
		{ notes: { markdown: '##Body Text\n For component body text heading' } }
	)
	.add(
		'Note',
		() => (
			<Note
				bold={boolean('bold', false)}
				textCenter={boolean('textCenter', true)}
				color={color('color', 'rgb(193, 192, 197)')}
			>
				{text('Text', 'Book a demo')}
			</Note>
		),
		{ notes: { markdown: '##Note\n For adding notes like in footer' } }
	)
