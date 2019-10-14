import React, { Component } from 'react';
import {
    FlatList,
    ActivityIndicator,
    Text,
    View
} from 'react-native'

export default class FetchExample extends Component {
    constructor(props) {
        super(props);
        this.state = {isLoading: true}
    }

    componentDidMount() {
        return fetch('http://l2stg.nostralogistics.com:40066/poi.json')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson
                }, function() {

                });
            })
            .catch((error) => {
                console.error(error);
                alert(error);
            });
    }

    render() {
        if (this.state.isLoading) {
            return(
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator />
                </View>
            );
        }

        return(
            <View style={{flex: 1, padding: 16}}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) => <Text>{"> " + item.name}</Text>}
                    keyExtractor={({id}, index) => id} />
            </View>
        );
    }
}
