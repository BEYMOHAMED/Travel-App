import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Discover from '../screens/Discover';
import Tabavigator from './TabNavigator'

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
        <RootStack.Group>
          <RootStack.Screen name='Main' component={Tabavigator} />
        </RootStack.Group>
        <RootStack.Group>
          <RootStack.Screen name='Discover' component={Discover} />
        </RootStack.Group>
    </RootStack.Navigator>
  )
}

export default RootNavigator