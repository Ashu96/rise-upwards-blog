// FeatureCard
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, color } from '@storybook/addon-knobs'
import FeatureCard from '../src/components/FeatureCard'

const stories = storiesOf('Components | Cards', module)

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs)

const props = {
	title: 'proactive',
	body:
		'We know that supporting employees before they are in crisis is faster\nand more effective in creating lasting change for their wellbeing\nand resilience',
	imageFluid: {
		base64:
			'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAADxklEQVQ4y11U/U9bVRi+Q+P/4I8mxhjNftoPDg3YbS4molODPxiXqDEmbAkzJjPRBNxkbEQ2PhSHsyS0W6IO5aPrFwxKL23X0q9L+Si0Hf3aoO0YLTQrhdLee9/H0xJwepI3zzkneZ/3eZ/33sNxTy1/GhVMFMANz5UOlffehHzUv063FjMUW8yg5E+TNP+YMnNrcPhSaLXF8fJ+vtGPQ0/zcYfPr3MAOENArCqfU7v49pEIbLDLyBbgX2fxeA+DWSCaB/gwRP0i2rj/L1axguaI9EwZwzl8ejcKtGtz6NHlSvawKIc2QXMpYgHyJUjyraI0tQzcSwDGBSgPyJj0CvJRqaJMAp7/4U5+U/F9BkfOJqWaL+Oob4yR3rlDgTTgWyGaWQHNPASmgpD1sx...',
		aspectRatio: 1.3157894736842106,
		src:
			'/static/ef464fd1dbbfbf0d0a84da8a873c9a63/5586e/874620dd60532b1feba3e8856521e24d.png',
		srcSet:
			'/static/ef464fd1dbbfbf0d0a84da8a873c9a63/f06f0/874620dd60532b1feba3e8856521e24d.png 71w,\n/static/ef464fd1dbbfbf0d0a84da8a873c9a63/98b41/874620dd60532b1feba3e8856521e24d.png 143w,\n/static/ef464fd1dbbfbf0d0a84da8a873c9a63/5586e/874620dd60532b1feba3e8856521e24d.png 285w,\n/static/ef464fd1dbbfbf0d0a84da8a873c9a63/0b0cc/874620dd60532b1feba3e8856521e24d.png 428w,\n/static/ef464fd1dbbfbf0d0a84da8a873c9a63/b5207/874620dd60532b1feba3e8856521e24d.png 450w',
		sizes: '(max-width: 285px) 100vw, 285px'
	}
}

stories.add(
	'FeatureCard with media',
	() => (
		<div className="row">
			<div className="col-4 offset-md-4">
				<FeatureCard
					title={text('Title', props.title)}
					body={text('Body', props.body)}
					imageFluid={props.imageFluid}
				></FeatureCard>
			</div>
		</div>
	),
	{ notes: { markdown: '##Heading1\n For page heading' } }
)
