import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { GlobalView, Header } from '../../components'

const Home = () => {
  return (
    <GlobalView>
      <View style={styles.container}>
        <Header />
        <View style={styles.center}>
          <Text>Home Page</Text>
        </View>
      </View>
    </GlobalView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  center: { flex: 1, justifyContent: 'center' },
})
