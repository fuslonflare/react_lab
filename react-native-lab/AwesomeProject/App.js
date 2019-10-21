import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { Appbar, Button } from 'react-native-paper'
import TypeText from './components/cards/type-text';
import TypeImage from './components/cards/type-image';
import TypeBoolean from './components/cards/type-boolean';
import TypeInteger from './components/cards/type-integer';

let ticketAppointmentQcItems = [
    {
        "id": 1,
        "ticketAppointmentQcStatusId": 1,
        "itemNo": 1,
        "name": "ช่างผู้ดำเนินการ",
        "type": 1,
        "remark": null
    },
    {
        "id": 2,
        "ticketAppointmentQcStatusId": 1,
        "itemNo": 2,
        "name": "จำนวนกล้องที่ติดตั้ง",
        "type": 4,
        "remark": null
    },
    {
        "id": 5,
        "ticketAppointmentQcStatusId": 1,
        "itemNo": 5,
        "name": "พื้นที่ทำงานโดยรอบ",
        "type": 2,
        "remark": null
    },
    {
        "id": 3,
        "ticketAppointmentQcStatusId": 1,
        "itemNo": 3,
        "name": "Sim สัญญาณดี",
        "type": 3,
        "remark": null
    },
    {
        "id": 4,
        "ticketAppointmentQcStatusId": 1,
        "itemNo": 4,
        "name": "เลข Sim ถูกต้อง",
        "type": 3,
        "remark": null
    }
];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleFieldChange = this.handleFieldChange.bind(this);
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
        ticketAppointmentQcItems = this.sortByItemNo(ticketAppointmentQcItems);
        return (
            <View style={{ flex: 1 }}>
                <Appbar.Header>
                    <Appbar.Content
                        title="QC List"
                        subtitle="List of quality control items" />
                </Appbar.Header>
                <View style={{ flex: 1, flexDirection: 'column', padding: 8 }}>
                    <FlatList
                        data={ticketAppointmentQcItems}
                        renderItem={({ item }) => this.renderCard(item)}
                        keyExtractor={item => item.id.toString()} />
                </View>
                <Button onPress={() => console.log('state', this.state)}>Save</Button>
            </View>
        );
    }
}

export default App;