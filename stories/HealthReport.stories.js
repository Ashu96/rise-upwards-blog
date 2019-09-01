import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import HealthReport from '../src/components/HealthReport/HealthReport'

const stories = storiesOf('Components | HealthReport', module)

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs)

const props = {
	title: 'Wellbeing Change',
	body:
		'Measured using the World Health Organisation Wellbeing Measure 5-item (WHO5)',
	imageFirst: true,
	image: {
		childImageSharp: {
			fixed: {
				base64:
					'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIDBAX/xAAVAQEBAAAAAAAAAAAAAAAAAAABAP/aAAwDAQACEAMQAAAB7uLLNuqoFOoTUB//xAAcEAACAgIDAAAAAAAAAAAAAAABAgADBBMREjH/2gAIAQEAAQUC9g7beZl3PW1jhUrJet0V5qUmf//EABURAQEAAAAAAAAAAAAAAAAAAAEg/9oACAEDAQE/ASP/xAAVEQEBAAAAAAAAAAAAAAAAAAABIP/aAAgBAgEBP...',
				width: 285,
				height: 284,
				src:
					'/static/1f94c82b936298eaa58750261948b3e8/4fcd7/5821819f471471197f9e23f2f27babec.jpg',
				srcSet:
					'/static/1f94c82b936298eaa58750261948b3e8/4fcd7/5821819f471471197f9e23f2f27babec.jpg 1x,\n/static/1f94c82b936298eaa58750261948b3e8/c82ae/5821819f471471197f9e23f2f27babec.jpg 1.5x,\n/static/1f94c82b936298eaa58750261948b3e8/dfa65/5821819f471471197f9e23f2f27babec.jpg 2x'
			}
		}
	},
	action: {
		primary: {
			label: 'Research publications',
			link: '/book'
		}
	},
	after_image: {
		publicURL:
			'/static/70eabfb79b244291060e4e6a1f597610-425736538ef29e7e9d3336157e935ec7.svg',
		childImageSharp: null
	},
	before_image: {
		publicURL:
			'/static/bd19b81015345dd0fd965849f9a52a56-676464657b87c8b59e0414e6e7fb1509.svg',
		childImageSharp: null
	}
}

stories.add(
	'with all props',
	() => (
		<HealthReport
			{...props}
			title={text('title', props.title)}
			body={text('body', props.body)}
			label={text('label', props.body)}
			
		></HealthReport>
	),
	{ notes: { markdown: '##HealthReport\n For page heading' } }
)
