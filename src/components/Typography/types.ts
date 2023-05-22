import { Sizes } from '../../types/types'

export interface ITypographyProps {
  children: string
  className?: string
  element?: string
  isUnderline?: boolean
  isUppercase?: boolean
  size?: Sizes
  type?: TypographyType
}

export type TypographyType =
  | 'display' // For content headings, marketing page headings, large display headings
  | 'headline' // For content headings, marketing page headings, large display headings
  | 'title' // For small titles
  | 'paragraph' // For paragraphs of text
  | 'button' // For text on buttons
  | 'caption' // For small captions
