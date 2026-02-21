import React from 'react'
import { twMerge } from 'tailwind-merge'

const baseClasses =
  'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50'

const variants = {
  default: 'bg-black text-white',
  outline: 'border border-current bg-transparent',
}

/**
 * @typedef {'button' | 'submit' | 'reset'} ButtonType
 */

/**
 * @param {{
 *   className?: string,
 *   variant?: 'default' | 'outline',
 *   type?: ButtonType
 * } & React.ButtonHTMLAttributes<HTMLButtonElement>} props
 */
export function Button({
  className = '',
  variant = 'default',
  type = /** @type {ButtonType} */ ('button'),
  ...props
}) {
  const variantClass = variants[variant] ?? variants.default
  const classes = twMerge(baseClasses, variantClass, className)

  return <button type={type} className={classes} {...props} />
}
