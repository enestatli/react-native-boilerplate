import React from 'react'
import { useTheme } from '@react-navigation/native'
import { View } from 'react-native'

const SplashScreen = () => {
  console.log(useTheme().colors)

  return (
    <View style={{ flex: 1, backgroundColor: useTheme().colors.primary }} />
  )
}

export default SplashScreen
