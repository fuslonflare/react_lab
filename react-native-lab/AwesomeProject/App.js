import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/home-screen';
import QcScreen from './screens/qc-screen';

const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        QC: QcScreen
    },
    {
        initialRouteName: 'Home'
    });
const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
    render() {
        return (
            <AppContainer />
        );
    }
}