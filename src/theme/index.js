import { DefaultTheme, DarkTheme } from '@react-navigation/native'

const spacing = {
  s: 8,
  m: 16,
  l: 24,
  xl: 40,
}

const textVariants = {
  header: {
    fontFamily: 'Raleway',
    fontSize: 36,
    fontWeight: 'bold',
  },
  body: {
    fontFamily: 'Merriweather',
    fontSize: 16,
  },
}

const breakPoints = {
  smallPhone: 0,
  phone: 321,
  tablet: 768,
}

const palette = {
  purple: '#5A31F4',
  green: '#0ECD9D',
  red: '#CD0E61',
  black: '#0B0B0B',
  white: 'white',
}

export const MyTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: palette.purple,
    background: palette.white,
    card: palette.white,
    text: palette.black,
    border: palette.black,
    notification: palette.red,
  },
  spacing: {
    ...spacing,
  },
  textVariants: {
    ...textVariants,
  },
  breakPoints: {
    ...breakPoints,
  },
}

export const MyDarkTheme = {
  ...DarkTheme,
  dark: true,
  colors: {
    ...DarkTheme.colors,
    primary: palette.green,
    background: palette.black,
    card: palette.black,
    text: palette.white,
    border: palette.white,
    notification: palette.red,
  },
  spacing: {
    ...spacing,
  },
  textVariants: {
    ...textVariants,
  },
  breakPoints: {
    ...breakPoints,
  },
}

// export const MyTheme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     background: palette.white,
//     foreground: palette.black,
//     primary: palette.purple,
//     success: palette.green,
//     danger: palette.red,
//     failure: palette.red,
//   },
//   spacing: {
//     s: 8,
//     m: 16,
//     l: 24,
//     xl: 40,
//   },
//   textVariants: {
//     header: {
//       fontFamily: 'Raleway',
//       fontSize: 36,
//       fontWeight: 'bold',
//     },
//     body: {
//       fontFamily: 'Merriweather',
//       fontSize: 16,
//     },
//   },
//   breakpoints: {
//     smallPhone: 0,
//     phone: 321,
//     tablet: 768,
//   },
// }

// export const MyDarkTheme = {
//   ...DarkTheme,
//   colors: {
//     ...DarkTheme.colors,
//     background: palette.black,
//     foreground: palette.white,
//   },
// }
