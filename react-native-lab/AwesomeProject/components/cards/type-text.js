import React, { Component } from 'react';
import { Card, RadioButton, TextInput } from 'react-native-paper';
import { View, Text } from 'react-native';

export default class TypeTextCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            remark: '',
            name: '',
            itemNo: 0
        }
    }

    render() {
        return (
            <View style={{ padding: 8 }}>
                <Card style={{ elevation: 5 }}>
                    <Card.Title title={'#' + this.props.itemNo + ' ' + this.props.name} />
                    <Card.Content>
                        <View style={{ flexDirection: 'column' }}>
                            <TextInput
                                mode='outlined'
                                style={{ marginTop: 8 }}
                                label={this.props.name}
                                value={this.state.value}
                                onChangeText={text => this.setState({ value: text })} />
                            <TextInput
                                mode='outlined'
                                style={{ marginTop: 8 }}
                                label='Remark'
                                multiline={true}
                                value={this.state.remark}
                                onChangeText={text => this.setState({ remark: text })} />
                        </View>
                    </Card.Content>
                </Card>
            </View>
        );
    }
}