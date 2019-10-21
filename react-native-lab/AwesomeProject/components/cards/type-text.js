import React, { Component } from 'react';
import { Card, TextInput } from 'react-native-paper';
import { View } from 'react-native';

export default class TypeTextCard extends Component {
    constructor(props) {
        super(props);
        this.handleChangeValue = this.handleChangeValue.bind(this);
        this.handleChangeRemark = this.handleChangeRemark.bind(this);
        this.state = {
            value: '',
            remark: '',
            name: '',
            itemNo: 0
        }
        this.props.onChange(this.props.qcItem.id, this.props.qcItem.type, this.state.value, null, null, null, this.state.remark);
    }

    handleChangeValue(newValue) {
        this.props.onChange(this.props.qcItem.id, this.props.qcItem.type, newValue, null, null, null, this.state.remark);
    }

    handleChangeRemark(remark) {
        this.props.onChange(this.props.qcItem.id, this.props.qcItem.type, this.state.value, null, null, null, remark);
    }

    render() {
        return (
            <View style={{ padding: 8 }}>
                <Card style={{ elevation: 5 }}>
                    <Card.Title title={'#' + this.props.qcItem.itemNo + ' ' + this.props.qcItem.name} />
                    <Card.Content>
                        <View style={{ flexDirection: 'column' }}>
                            <TextInput
                                mode='outlined'
                                style={{ marginTop: 8 }}
                                label={this.props.qcItem.name}
                                value={this.state.value}
                                onChangeText={(text) => { this.setState({ value: text }); this.handleChangeValue(text); }} />
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