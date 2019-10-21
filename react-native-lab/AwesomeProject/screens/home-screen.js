import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home'
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button
                    mode="contained"
                    onPress={() => fetch('http://l2stg.nostralogistics.com:40066/qc.json')
                        .then((response) => response.json())
                        .then((responseJson) => {
                            this.props.navigation.navigate('QC', responseJson.ticketAppointmentQcStatus)
                        })
                        .catch((error) => {
                            console.error(error);
                        })
                    }>Fetch data qc</Button>
            </View>
        );
    }
}

export default HomeScreen;