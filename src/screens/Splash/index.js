import React from 'react'
import { useTheme } from '@react-navigation/native'
import { View } from 'react-native'

const SplashScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: useTheme().colors.primary }} />
  )
}

export default SplashScreen
