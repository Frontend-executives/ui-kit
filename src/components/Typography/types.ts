export interface ITypographyProps {
  children: string
  className?: string
  element?: string
  isUnderLine?: boolean
  isUpperCase?: boolean
  type?: TTypographyType
}

export type TTypographyType =
  | 'displayLarge' // For large displays
  | 'displayMedium' // For content headings, marketing page headings, large display headings
  | 'displaySmall' // For content headings, marketing page headings, large display headings
  | 'headlineLarge' // For content headings, marketing page headings, large display headings
  | 'headlineMedium' // For content headings, marketing page headings, large display headings
  | 'headlineSmall' // For content headings, marketing page headings, large display headings
  | 'titleLarge' // For small titles
  | 'titleMedium' // For small titles
  | 'titleSmall' // For small titles
  | 'bodyLarge' // For most UI text
  | 'bodyMedium' // For most UI text
  | 'bodySmall' // For most UI text
  | 'paragraphLarge' // For paragraphs of text
  | 'paragraphMedium' // For paragraphs of text
  | 'paragraphSmall' // For paragraphs of text
  | 'button' // For text on buttons
  | 'caption' // For small captions
  | 'underline' // For underline text
