import { useNavigation } from '@react-navigation/native';
import React, {useLayoutEffect} from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import Explore from '../screens/Explore';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()
const TabNavigator = () => {

    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    })
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTinColor: 'red',
        tabBarInactiveTinColor: 'blue',
        tabBarIcon: ({}) => {
          if(route.name === 'Home'){
            return (
              <AntDesign name="home" size={30} color="black" />
            )
          } else {
            return (
              <Feather name="compass" size={30} color="black" />
            )
          }
        }
      })}
    >
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Explore' component={Explore} />
    </Tab.Navigator>
  )
}

export default TabNavigator