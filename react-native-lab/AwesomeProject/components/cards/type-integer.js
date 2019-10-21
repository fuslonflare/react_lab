import React, { Component } from 'react';
import { Card, RadioButton, TextInput, Button } from 'react-native-paper';
import { View, Text } from 'react-native';

export default class TypeIntegerCard extends Component {
    constructor(props) {
        super(props);
        this.onPressDecreseButton = this.onPressDecreseButton.bind(this);
        this.onPressIncreaseButton = this.onPressIncreaseButton.bind(this);
        this.handleChangeValue = this.handleChangeValue.bind(this);
        this.handleChangeRemark = this.handleChangeRemark.bind(this);
        this.state = {
            value: 0,
            remark: '',
            name: '',
            itemNo: 0
        }
        this.props.onChange(this.props.qcItem.id, this.props.qcItem.type, null, this.state.value, null, null, this.state.remark);
    }

    onPressDecreseButton() {
        let newValue = this.state.value - 1;
        this.setState({ value: newValue });
        this.handleChangeValue(newValue);
    }

    onPressIncreaseButton() {
        let newValue = this.state.value + 1;
        this.setState({ value: newValue });
        this.handleChangeValue(newValue);
    }

    handleChangeValue(newValue) {
        this.props.onChange(this.props.qcItem.id, this.props.qcItem.type, null, newValue, null, null, this.state.remark);
    }

    handleChangeRemark(remark) {
        this.props.onChange(this.props.qcItem.id, this.props.qcItem.type, null, this.state.value, null, null, remark);
    }

    render() {
        return (
            <View style={{ padding: 8 }}>
                <Card style={{ elevation: 5 }}>
                    <Card.Title title={'#' + this.props.qcItem.itemNo + ' ' + this.props.qcItem.name} />
                    <Card.Content>
                        <View style={{ flexDirection: 'column' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Button
                                    style={{ flex: 1, backgroundColor: this.state.value <= 0 ? 'grey' : 'rgb(255, 100, 100)' }}
                                    onPress={this.onPressDecreseButton}
                                    disabled={this.state.value <= 0 ? true : false}>-</Button>
                                <Text style={{ flex: 5, textAlign: 'center', textAlignVertical: 'center' }}>{this.state.value}</Text>
                                <Button style={{ flex: 1, backgroundColor: 'rgb(100, 255, 100)' }} onPress={this.onPressIncreaseButton}>+</Button>
                            </View>
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