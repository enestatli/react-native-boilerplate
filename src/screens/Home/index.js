import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { GlobalView } from '../../components'

const Home = () => {
  return (
    <GlobalView>
      <View style={styles.container}>
        <Text>Home Page</Text>
      </View>
    </GlobalView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
