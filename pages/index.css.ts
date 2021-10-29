import { style, createVar, globalStyle } from '@vanilla-extract/css'

/**
 * The main background color
 */
export const colorBackground = createVar('colorBackground')

/**
 * The main text color
 */
export const colorText = createVar('colorText')

/**
 * The main font family
 */
export const typographyFontFamily = createVar('typographyFontFamily')

globalStyle(':root', {
  vars: {
    [colorBackground]: 'hsl(0 0% 90%)',
    [colorText]: 'hsl(0 0% 0%)',
    [typographyFontFamily]: "'Cormorant Garamond', serif",
  },
})

globalStyle('html', {
  minHeight: '100%',
})

globalStyle('body', {
  background: colorBackground,
  color: colorText,
  fontFamily: typographyFontFamily,
  height: '100vh',
})

/**
 * These are the main styles for the index page
 */
export const indexClass = style({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem',
  textAlign: 'center',
  gap: 'clamp(1rem, calc(1rem + 2vw), 1.25rem)',
})

/**
 * These are the main styles for the index heading
 */
export const indexH1 = style({
  maxWidth: '35ch',
  fontSize: 'clamp(1rem, calc(1rem + 2vw), 1.25rem)',
  fontWeight: 200,
  color: colorText,
})
