import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import HeroBanner from '../src/components/HeroBanner/HeroBanner'

const stories = storiesOf('Components | HeroBanner', module)

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs)

const props = {
	title: 'Making minds happier',
	body: `Uprise is a full spectrum Employee Assistance Program that works with your
		organisation proactively to support employee health.`,
	imageFirst: true,
	image: {
		childImageSharp: {
			fluid: {
				base64:
					'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAACVUlEQVQoz1WPW0hTcRzHD1kShI/Rc/hW70EPghBRhIJYrHqwwqGhg1aiUupaQqSIGXiZpS1vzYkr52xzO21rlodzvM15OZk23dkOm3nB23Iu0fP/1kmK+j59vny//Ph9KeqXMi9eoQqzbiR8DO0dkr0rRE56V9E6E8MivwbCRqT1nlmpuyuAU3JeqvMkzAPUv1LenjiArNQz/wWOhb3kgQi+8ZuAzbYEdl4i9gDgCgNvmJUddcaFtD9dxSgSSxpm83OzvUmyz7vGHgTph6ljdxWX1TIbptE0FgM0VYvx8kKOfJpcxZjXR8xe/NBZlpCjtS5QdUjCdFGi3C/Q+YfStJFMme8Z14/8PljQ4TvbpH83+OTl3PG3w5s+EweoSvz72po5wjFzxO/uI5wf0D...',
				aspectRatio: 2.3793103448275863,
				src:
					'/static/08fbbd412463f9cfcaee4a0190c38840/0533f/58269803ccf31c5cd53f5cd274dfbdc2.png',
				srcSet:
					'/static/08fbbd412463f9cfcaee4a0190c38840/2e992/58269803ccf31c5cd53f5cd274dfbdc2.png 290w,\n/static/08fbbd412463f9cfcaee4a0190c38840/88297/58269803ccf31c5cd53f5cd274dfbdc2.png 580w,\n/static/08fbbd412463f9cfcaee4a0190c38840/0533f/58269803ccf31c5cd53f5cd274dfbdc2.png 1160w,\n/static/08fbbd412463f9cfcaee4a0190c38840/7d6d9/58269803ccf31c5cd53f5cd274dfbdc2.png 1740w,\n/static/08fbbd412463f9cfcaee4a0190c38840/ecaa7/58269803ccf31c5cd53f5cd274dfbdc2.png 1794w',
				sizes: '(max-width: 1160px) 100vw, 1160px'
			}
		}
	},
	action: {
		primary: {
			label: 'Book a demo',
			link: '/book'
		}
	}
}

stories.add(
	'HeroBanner',
	() => (
		<HeroBanner
			title={text('title', props.title)}
			subTitle={text('subTitle', '')}
			body={text('body', props.body)}
			action={props.action}
			image={props.image}
			splitScreen={boolean('splitScreen', false)}
			bgPrimary={boolean('bgPrimary', false)}
		></HeroBanner>
	),
	{ notes: { markdown: '##HeroBanner\n For page heading' } }
)
