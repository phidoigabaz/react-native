import React,{Component} from 'react';
import {TabNavigator} from 'react-navigation';
import Home from '../screen/Home/Home';
import Profile from '../screen/Profile/Profile';

let routerConfigs = {
    Home:{
        homeScreen: Home
    },
    Profile:{
        profileScreen: Profile
    },
};

let tabConfigs = {
    tabBarPosition: 'Bottom',
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
        activeTincolor: 'blue',
        labelStyle: {
            fontSize: 13
        },
        style: {
            backgroundColor: 'gray',
            padding: -10,
        }
    },
};

const tabBar = TabNavigator(routerConfigs,tabConfigs);