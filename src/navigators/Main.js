import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Home, Settings } from '@/screens'

const Tab = createBottomTabNavigator()

const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  )
}

export default MainNavigator
