import type { Size } from '../types';

const sizeStyles = {
  sm: {
    input: 'px-2 py-1 text-sm',
    label: 'text-xs',
    checkbox: 'h-3 w-3'
  },
  md: {
    input: 'px-3 py-2 text-base',
    label: 'text-sm',
    checkbox: 'h-4 w-4'
  },
  lg: {
    input: 'px-4 py-3 text-lg',
    label: 'text-base',
    checkbox: 'h-5 w-5'
  }
} as const;

export function getInputStyles(size: Size = 'md') {
  return [
    'block',
    'w-full',
    'bg-white',
    'border',
    'border-gray-300',
    'rounded-md',
    'shadow-sm',
    'focus:outline-none',
    'focus:ring-primary',
    'focus:border-primary',
    'transition-colors',
    'duration-200',
    sizeStyles[size].input
  ].join(' ');
}

export function getCheckboxStyles(size: Size = 'md') {
  return [
    'text-primary',
    'focus:ring-primary',
    'border-gray-300',
    'rounded',
    'transition-colors',
    'duration-200',
    sizeStyles[size].checkbox
  ].join(' ');
}

export function getLabelStyles(size: Size = 'md') {
  return [
    'block',
    'font-medium',
    'text-gray-700',
    sizeStyles[size].label
  ].join(' ');
}

export const inputWrapperStyles = 'mt-1';