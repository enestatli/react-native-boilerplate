import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native'
import { navigationRef } from '@/navigators/Root'
import MainNavigator from '@/navigators/Main'
import { MyDarkTheme, MyTheme } from '../theme'

//TODO: use npx create-react-native-app!!!
//TODO: one more with expo
//TODO: https://www.npmjs.com/package/react-native-responsive-dimensions use!

import { Splash } from '@/screens'
import { useDeviceMode } from '../hooks'

const Stack = createStackNavigator()

// let MainNavigator

const ApplicationNavigator = () => {
  const [isApplicationLoaded, setIsApplicationLoaded] = useState(false)
  const { deviceMode } = useDeviceMode()

  // useEffect(() => {
  //   if (MainNavigator === undefined) {
  //     MainNavigator = require('./Main').default
  //     setIsApplicationLoaded(true)
  //   }
  // }, [])

  // // on destroy needed to be able to reset when app close in background (Android)
  // useEffect(
  //   () => () => {
  //     setIsApplicationLoaded(false)
  //     MainNavigator = null
  //   },
  //   [],
  // )

  return (
    <NavigationContainer
      theme={deviceMode === 'dark' ? DarkTheme : DefaultTheme}
      ref={navigationRef}>
      <Stack.Navigator
        screenOptions={() => {
          return {
            headerShown: false,
          }
        }}>
        {/* <Stack.Screen name="Splash" component={Splash} /> */}

        <Stack.Screen name="Main" component={MainNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ApplicationNavigator
