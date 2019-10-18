import React, { Component } from 'react';
import { Card, RadioButton, TextInput } from 'react-native-paper';
import { View, Text } from 'react-native';

export default class TypeBooleanCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: 'yes',
            remark: '',
            name: '',
            itemNo: 0
        }
    }

    render() {
        return (
            <View style={{ padding: 8 }}>
                <Card style={{elevation: 5}}>
                    <Card.Title title={'#' + this.props.itemNo + ' ' + this.props.name} />
                    <Card.Content>
                        <View style={{ flexDirection: 'column' }}>
                            <RadioButton.Group
                                onValueChange={value => this.setState({ checked: value })}
                                value={this.state.checked}
                                style={{ flexDirection: 'column' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'stretch' }}>
                                    <Text style={{ flex: 1, textAlignVertical: 'center' }}>Yes</Text>
                                    <RadioButton style={{ flex: 1 }} value="yes" />
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'stretch' }}>
                                    <Text style={{ flex: 1, textAlignVertical: 'center' }}>No</Text>
                                    <RadioButton style={{ flex: 1 }} value="no" />
                                </View>
                            </RadioButton.Group>
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