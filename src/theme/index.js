import { DefaultTheme } from '@react-navigation/native'

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'red',
  },
}

export default MyTheme
