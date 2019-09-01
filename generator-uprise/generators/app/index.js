const snakeCase = require('lodash.snakecase')
const Generator = require('yeoman-generator')
const COMPONENT_TEMPLATE = 'component.js.template'
const STORY_TEMPLATE = 'story.js.template'
const CONTAINER_TEMPLATE = 'container.js.template'
// const TEST_TEMPLATE = 'test.jsx'

const COMPONENT_DIR = './src/components/'
const STORY_DIR = './stories/'
// const TEST_DIR = 'frontend/luxury-guest/tests/components/PdpFramework/sections'

module.exports = class extends Generator {
	method1() {
		this.log('method 1 just ran')
	}
	_writeFile(templatePath, destinationPath, params) {
		if (!this.fs.exists(destinationPath)) {
			this.fs.copyTpl(templatePath, destinationPath, params)
		}
	}

	prompting() {
		return this.prompt([
			{
				type: 'input',
				name: 'componentName',
				required: true,
				message:
					'Yo! What is the section component name? (e.g. SuperFlyFullBleed or ThreeImagesWithFries)'
			}
		]).then(data => {
			this.data = data
		})
	}

	writing() {
		const { componentName } = this.data
		const componentConst = snakeCase(componentName).toUpperCase()

		this._writeFile(
			this.templatePath(COMPONENT_TEMPLATE),
			this.destinationPath(
				`${COMPONENT_DIR}${componentName}`,
				`${componentName}.js`
			),
			{ componentConst, componentName }
		)

		this._writeFile(
			this.templatePath(CONTAINER_TEMPLATE),
			this.destinationPath(`${COMPONENT_DIR}${componentName}`, 'index.js'),
			{ componentConst, componentName }
		)

		this._writeFile(
			this.templatePath(STORY_TEMPLATE),
			this.destinationPath(STORY_DIR, `${componentName}.stories.jsx`),
			{
				componentName,
				componentPath: `${COMPONENT_DIR}${componentName}/${componentName}`
			}
		)

		// this._writeFile(
		// 	this.templatePath(TEST_TEMPLATE),
		// 	this.destinationPath(TEST_DIR, `${componentName}.test.jsx`),
		// 	{ componentName }
		// )

		// this._addToSectionTypes()
		// this._addToSectionMapping()
	}
}
