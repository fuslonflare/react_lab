import React from 'react';
import { View, Text, Button } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Page</Text>
                <Button
                    onPress={() => this.props.navigation.navigate('Info')}
                    title="Go to info" />
            </View>
        );
    }
}

class InfoScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Info Screen</Text>
                <Button
                    onPress={() => this.props.navigation.push('Info')}
                    title="Go to info again..." />
                <Button
                    onPress={() => this.props.navigation.push('Home')}
                    title="Back to home" />
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="Go back" />
            </View>
        );
    }
}

const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    Info: InfoScreen
}, {initialRouteName: 'Home'});

export default createAppContainer(AppNavigator);
