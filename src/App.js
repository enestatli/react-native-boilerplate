import React from 'react'
import codePush from 'react-native-code-push'

import { ApplicationNavigator } from '@/navigators'
import { AuthProvider } from '@/providers'

const App = () => {
  return (
    <AuthProvider>
      <ApplicationNavigator />
    </AuthProvider>
  )
}

//TODO: appcenter, react-native-bootsplash, react-native-codepush, react-native-localization, react-native-svg

let codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_START,
  installMode: codePush.InstallMode.IMMEDIATE,
}

export default codePush(codePushOptions)(App)
