import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Home,
} from '../../container';



const StackNavigator = createStackNavigator();
function AppStack({ navigation }) {
  return (
    <StackNavigator.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
      <StackNavigator.Screen name="Home" component={Home} />
     
    </StackNavigator.Navigator>
  );
}

export default AppStack;
