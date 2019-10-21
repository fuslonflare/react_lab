import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { Button } from 'react-native-paper'
import TypeText from '../components/cards/type-text';
import TypeImage from '../components/cards/type-image';
import TypeBoolean from '../components/cards/type-boolean';
import TypeInteger from '../components/cards/type-integer';

class QcScreen extends Component {
    static ticketAppointmentQcItems = {};

    static navigationOptions = {
        title: 'QC List'
    };

    constructor(props) {
        super(props);
        this.state = {};

        this.handleFieldChange = this.handleFieldChange.bind(this);

        const { navigation } = this.props;
        ticketAppointmentQcItems = navigation.getParam('ticketAppointmentQcItems', '');
        ticketAppointmentQcItems = this.sortByItemNo(ticketAppointmentQcItems);
    }

    handleFieldChange(ticketAppointmentQcItemId, dataType, valueText, valueInteger, valueBoolean, valueImageUri, remark) {
        this.setState({
            [ticketAppointmentQcItemId]: {
                dataType: dataType,
                valueText: valueText,
                valueInteger: valueInteger,
                valueBoolean: valueBoolean,
                valueImageUri: valueImageUri,
                remark: remark
            }
        });
    }

    sortByItemNo(collections) {
        console.log('collections', collections);
        return collections.sort((a, b) => a.itemNo - b.itemNo);
    }

    renderCard(qcItem) {
        if (qcItem.type === 1) {
            return <TypeText qcItem={qcItem} onChange={this.handleFieldChange} />
        }
        else if (qcItem.type === 2) {
            return <TypeImage qcItem={qcItem} onChange={this.handleFieldChange} />
        }
        else if (qcItem.type === 3) {
            return <TypeBoolean qcItem={qcItem} onChange={this.handleFieldChange} />
        }
        else if (qcItem.type === 4) {
            return <TypeInteger qcItem={qcItem} onChange={this.handleFieldChange} />
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, flexDirection: 'column', padding: 8 }}>
                    <FlatList
                        data={ticketAppointmentQcItems}
                        renderItem={({ item }) => this.renderCard(item)}
                        keyExtractor={item => item.id.toString()} />
                </View>
                <Button mode='contained' onPress={() => console.log('state', this.state)}>Save</Button>
            </View>
        );
    }
}

export default QcScreen;