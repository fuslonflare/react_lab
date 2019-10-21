import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

class DetailScreen extends Component {
    static navigationOptions = {
        title: 'Detail',
    };

    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Detail Screen</Text>
                <Text>itemId: {JSON.stringify(navigation.getParam('itemId', 'no-id'))}</Text>
                <Text>otherParam: {JSON.stringify(navigation.getParam('otherParam', 'default-value'))}</Text>
                <Button
                    onPress={() => navigation.push('Detail', {
                        itemId: Math.floor(Math.random() * 100)
                    })}>Go to Detail again</Button>
            </View>
        );
    }
}

export default DetailScreen;