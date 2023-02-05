import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
const Tab = createMaterialTopTabNavigator();

import { StyleSheet } from 'react-native'
import React from 'react'
import { Chat, Status, Call } from '../../container';

const TopTabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName='Chat'
            tabBarOptions={{
                activeTintColor: 'white',
                inactiveTintColor: '#ffffff',
                style: {
                    backgroundColor: '#00A884', 
                },
                indicatorStyle: {
                    backgroundColor: 'white',
                },
            }}
        >
            <Tab.Screen name='Chat' component={Chat} />
            <Tab.Screen name='Status' component={Status} />
            <Tab.Screen name='Call' component={Call} />
        </Tab.Navigator>
    )
}

export default TopTabNavigator;

const styles = StyleSheet.create({})



