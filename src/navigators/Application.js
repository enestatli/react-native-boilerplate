import React, { useEffect, useRef, useState } from 'react'
import { Appearance, AppState, StatusBar } from 'react-native'
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

import { Splash } from '@/screens'

const Stack = createStackNavigator()

// let MainNavigator

const ApplicationNavigator = () => {
  const [isApplicationLoaded, setIsApplicationLoaded] = useState(false)
  const [deviceMode, setDeviceMode] = useState(Appearance.getColorScheme())
  const appState = useRef(AppState.currentState)

  useEffect(() => {
    AppState.addEventListener('change', _handleAppStateChange)

    return () => {
      AppState.removeEventListener('change', _handleAppStateChange)
    }
  }, [])

  const _handleAppStateChange = (nextAppState) => {
    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      setDeviceMode(Appearance.getColorScheme())
    }

    appState.current = nextAppState
    setDeviceMode(Appearance.getColorScheme())
  }

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
      theme={deviceMode === 'dark' ? MyDarkTheme : MyTheme}
      ref={navigationRef}>
      <StatusBar backgroundColor={deviceMode === 'dark' ? 'black' : 'white'} />
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
