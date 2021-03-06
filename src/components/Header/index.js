import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { height, width } from '../../utils/dimensions'

const Header = () => {
  return (
    <View style={styles.container}>
      <Text>Header</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height / 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
