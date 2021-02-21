import { Appearance } from 'react-native'
import { DarkTheme, DefaultTheme } from '@react-navigation/native'
import fonts from '../fonts'
import gutters from '../gutters'
import images from '../images'
import layout from '../layout'
import common from '../common'
import * as DefaultVariables from '../variables'
import themes from '../themes'

export default function () {
  // Get the scheme device
  const colorScheme = Appearance.getColorScheme()

  // Get current theme from the store
  const currentTheme = 'light' || ''
  const isDark = false
  const darkMode = isDark === null ? colorScheme === 'dark' : isDark
  //Select the right theme light theme ({} if not exist)
  const { Variables: themeConfigVars = {}, ...themeConfig } =
    themes[currentTheme] || {}

  const { Variables: darkThemeConfigVars = {}, ...darkThemeConfig } = darkMode
    ? themes[`${currentTheme}_dark`] || {}
    : {}

  const themeVariables = mergeVariables(
    DefaultVariables,
    themeConfigVars,
    darkThemeConfigVars,
  )

  // Build the default theme
  const baseTheme = {
    Fonts: fonts(themeVariables),
    Gutters: gutters(themeVariables),
    Layout: layout(themeVariables),
    Images: images(themeVariables),
    Common: common({
      ...themeVariables,
      Layout: layout(themeVariables),
      Gutters: gutters(themeVariables),
    }),
    ...themeVariables,
  }

  // Merge and return the current Theme
  return buildTheme(
    darkMode,
    baseTheme,
    formatTheme(themeVariables, themeConfig || {}),
    formatTheme(themeVariables, darkThemeConfig || {}),
  )
}

const formatTheme = (variables, theme) => {
  return Object.entries(theme).reduce((acc, [name, generate]) => {
    return {
      ...acc,
      [name]: generate(variables),
    }
  }, {})
}

const mergeVariables = (variables, themeConfig, darkThemeConfig) =>
  Object.entries(variables).reduce((acc, [group, vars]) => {
    return {
      ...acc,
      [group]: {
        ...vars,
        ...(themeConfig[group] || {}),
        ...(darkThemeConfig[group] || {}),
      },
    }
  }, {})

const buildTheme = (darkMode, baseTheme, themeConfig, darkThemeConfig) => {
  return {
    ...mergeTheme(baseTheme, themeConfig, darkThemeConfig),
    darkMode,
    NavigationTheme: mergeNavigationTheme(
      darkMode ? DarkTheme : DefaultTheme,
      baseTheme.NavigationColors,
    ),
  }
}

const mergeTheme = (baseTheme, theme, darkTheme) => ({
  ...Object.entries(baseTheme).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: {
        ...value,
        ...(theme[key] || {}),
        ...(darkTheme[key] || {}),
      },
    }),
    {},
  ),
})

const mergeNavigationTheme = (reactNavigationTheme, overrideColors) => ({
  ...reactNavigationTheme,
  colors: {
    ...reactNavigationTheme.colors,
    ...overrideColors,
  },
})
