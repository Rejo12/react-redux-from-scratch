import React from 'react'

export type buttonCompProps = {
  className?: string
  buttonLabel: string
}

const Button = ({ className, buttonLabel }: buttonCompProps) => {
  return <button className={className}>{buttonLabel}</button>
}

export default Button
