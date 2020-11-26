import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Donate from '../Screens/BookDonateScreen'
import Request from '../Screens/BookRequestScreen'
export const AppTabNavigator = createBottomTabNavigator({
    donateBooks:{screen:Donate,
    navigationOptions:{
        tabBarIcon:<Image source={require('../assets/request-list.png')}></Image>,
        tabBarLabel:"Trade"
    }},requestBooks:{screen:Request,
        navigationOptions:{
            tabBarIcon:<Image source={require('../assets/request-book.png')}></Image>,
            tabBarLabel:"Recive"
        }}
})