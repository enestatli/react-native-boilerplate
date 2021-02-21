import React from 'react';
import { SafeAreaView, Text, StatusBar } from 'react-native';
import codePush from 'react-native-code-push';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Hello world!</Text>
      </SafeAreaView>
    </>
  );
};

//TODO: appcenter, react-native-bootsplash, react-native-codepush, react-native-localization, react-native-svg

let codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_START,
  installMode: codePush.InstallMode.IMMEDIATE,
};

export default codePush(codePushOptions)(App);
