import { useEffect, useRef, useState } from 'react'
import { Appearance, AppState } from 'react-native'

const useDeviceMode = () => {
  const appState = useRef(AppState.currentState)
  const [deviceMode, setDeviceMode] = useState(Appearance.getColorScheme())

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

  return { deviceMode }
}

export { useDeviceMode }
