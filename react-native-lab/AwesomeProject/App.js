import React, { Component } from 'react';
import { View, Text, Button, ProgressBarAndroid } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PubSub from 'pubsub-js';

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home'
    };

    constructor(props) {
        super(props)
        this.state = {
            wantRefresh: false
        }
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                {
                    this.state.wantRefresh
                        ? <ProgressBarAndroid styleAttr="Horizontal" />
                        : null
                }
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Home Screen</Text>
                    <Button
                        title='Go to Details'
                        onPress={() => this.props.navigation.navigate('Details')} />
                </View>
            </View>
        );
    }

    componentDidMount() {
        let token = PubSub.subscribe('wantRefresh', this.onGlobalEvent.bind(this))
    }

    onGlobalEvent(message, data) {
        console.log('[onGlobalEvent] message =', message, ', data =', data)
        if (message == 'wantRefresh') {
            this.setState({ wantRefresh: true })
        }
    }
}

class DetailsScreen extends React.Component {
    static navigationOptions = {
        title: 'Details'
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Button
                    title="Publish"
                    onPress={() => PubSub.publish('wantRefresh', true)} />
            </View>
        );
    }
}

const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen
    },
    {
        initialRouteName: 'Home'
    }
);

export default createAppContainer(AppNavigator);