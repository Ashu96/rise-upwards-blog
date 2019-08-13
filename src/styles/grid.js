import React from 'react'

export function Container({ children, className, ...props }) {
  return (
    <div className={`container ${className}`} {...props}>
      {children}
    </div>
  )
}

Container.defaultProps = {
  className: ''
}

export function Row({ children, className, ...props }) {
  return (
    <div className={`row ${className}`} {...props}>
      {children}
    </div>
  )
}

Row.defaultProps = {
  className: ''
}

export function Col({ children, className, ...props }) {
  return (
    <div className={`col-12 ${className}`} {...props}>
      {children}
    </div>
  )
}

Col.defaultProps = {
  className: ''
}
