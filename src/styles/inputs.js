import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import { primary, extended } from '../constants/colors'

const TextInputContainer = Styled.div`
/****  floating-Lable style start ****/
.floating-label {
  position: relative;
  margin-bottom: 20px;
}
.floating-input,
.floating-select {
  font-size: 14px;
  padding: 4px 4px;
  display: block;
  width: 100%;
  height: 42px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${extended.charcoal.three};
}

.floating-input:focus,
.floating-select:focus {
  outline: none;
  border-bottom: 2px solid ${primary.purple};
}

label {
  color: ${extended.charcoal.three};
  font-size: 14px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 5px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

.floating-input:focus ~ label {
  top: -14px;
  font-size: 12px;
  color: ${primary.purple};
}

.floating-select:focus ~ label,
.floating-select:not([value='']):valid ~ label {
  top: -14px;
  font-size: 12px;
  color: ${primary.purple};
}

/* active state */
.floating-input:focus ~ .bar:before,
.floating-input:focus ~ .bar:after,
.floating-select:focus ~ .bar:before,
.floating-select:focus ~ .bar:after {
  width: 50%;
}

*,
*:before,
*:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.floating-textarea {
  min-height: 30px;
  max-height: 260px;
  overflow: hidden;
  overflow-x: hidden;
}

/* highlighter */
.highlight {
  position: absolute;
  height: 50%;
  width: 100%;
  top: 15%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
}

/* active state */
.floating-input:focus ~ .highlight,
.floating-select:focus ~ .highlight {
  -webkit-animation: inputHighlighter 0.3s ease;
  -moz-animation: inputHighlighter 0.3s ease;
  animation: inputHighlighter 0.3s ease;
}

/* animation */
@-webkit-keyframes inputHighlighter {
  from {
    background: ${primary.purple};
  }
  to {
    width: 0;
    background: transparent;
  }
}
@-moz-keyframes inputHighlighter {
  from {
    background: ${primary.purple};
  }
  to {
    width: 0;
    background: transparent;
  }
}
@keyframes inputHighlighter {
  from {
    background: ${primary.purple};
  }
  to {
    width: 0;
    background: transparent;
  }
}

/****  floating-Lable style end ****/

`

export function TextInput({ id, label, isRequired }) {
	return (
		<TextInputContainer>
			<div className="floating-label">
				<input
					className="floating-input"
					type="text"
					id={id}
					required={isRequired}
				/>
				<span className="highlight" />
				<label htmlFor={id}>{label}</label>
			</div>
		</TextInputContainer>
	)
}

TextInput.propTypes = {
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	isRequired: PropTypes.bool
}

TextInput.defaultProps = {
	isRequired: false
}
