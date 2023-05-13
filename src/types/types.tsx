import { SVGProps } from 'react'

export type TIcon = SVGProps<SVGSVGElement>

export enum IconSize {
  S = 16,
  M = 20,
  L = 24,
}

export const THEMES = {
  black: 'black',
  failed: 'failed',
  primary: 'primary',
  success: 'success',
  tertiary: 'tertiary',
  warning: 'warning',
  white: 'white',
} as const

export const SIZES = {
  l: 'l',
  m: 'm',
  s: 's',
} as const
