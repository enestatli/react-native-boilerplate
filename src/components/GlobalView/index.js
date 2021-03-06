import React from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { useStatusBar } from '../../hooks'

const GlobalView = ({ children }) => {
  useStatusBar()
  const insets = useSafeAreaInsets()

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop:
            Platform.OS === 'ios' ? insets.top : StatusBar.currentHeight,
        },
      ]}>
      {children}
    </View>
  )
}

export default GlobalView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
})
