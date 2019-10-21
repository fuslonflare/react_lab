import React, { Component } from 'react';
import { Card, RadioButton, TextInput } from 'react-native-paper';
import { View, Text } from 'react-native';

export default class TypeBooleanCard extends Component {
    constructor(props) {
        super(props);
        this.handleChangeValue = this.handleChangeValue.bind(this);
        this.handleChangeRemark = this.handleChangeRemark.bind(this);
        this.state = {
            checked: 'yes',
            remark: '',
            name: '',
            itemNo: 0
        }
        this.props.onChange(this.props.qcItem.id, this.props.qcItem.type, null, null, this.state.checked === 'yes' ? true : this.state.checked === 'no' ? false : null, null, this.state.remark);
    }

    handleChangeValue(newValue) {
        this.props.onChange(this.props.qcItem.id, this.props.qcItem.type, null, null, newValue === 'yes' ? true : newValue === 'no' ? false : null, null, this.state.remark);
    }

    handleChangeRemark(remark) {
        this.props.onChange(this.props.qcItem.id, this.props.qcItem.type, null, null, this.state.checked === 'yes' ? true : this.state.checked === 'no' ? false : null, null, remark);
    }

    render() {
        return (
            <View style={{ padding: 8 }}>
                <Card style={{ elevation: 5 }}>
                    <Card.Title title={'#' + this.props.qcItem.itemNo + ' ' + this.props.qcItem.name} />
                    <Card.Content>
                        <View style={{ flexDirection: 'column' }}>
                            <RadioButton.Group
                                onValueChange={(value) => { this.setState({ checked: value }); this.handleChangeValue(value); }}
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
                                onChangeText={(text) => { this.setState({ remark: text }); this.handleChangeRemark(text); }} />
                        </View>
                    </Card.Content>
                </Card>
            </View>
        );
    }
}