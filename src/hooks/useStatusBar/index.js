import { useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { Platform, StatusBar } from 'react-native'

import { useDeviceMode } from '../useDeviceMode'

const useStatusBar = () => {
  const { deviceMode } = useDeviceMode()

  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle(
        deviceMode === 'dark' ? 'light-content' : 'dark-content',
      )
      Platform.OS === 'android' && StatusBar.setTranslucent(true)
      Platform.OS === 'android' && StatusBar.setBackgroundColor('transparent')
    }, [deviceMode]),
  )
}

export { useStatusBar }
