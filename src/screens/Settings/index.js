import React from 'react'
import { useTheme } from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native'

const Settings = () => {
  console.log(useTheme())

  return (
    <View style={styles.container}>
      <Text style={{ color: useTheme().colors.primary }}>Settings Page</Text>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    // color: useTheme().colors.text,
  },
})
