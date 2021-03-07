import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { GlobalView } from '../../components'
import { useStatusBar } from '../../hooks'

const Settings = () => {
  useStatusBar()

  return (
    <GlobalView>
      <View style={styles.container}>
        <Text>Settings Page</Text>
      </View>
    </GlobalView>
  )
}

export default Settings

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
