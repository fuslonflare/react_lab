import React, { Component } from 'react';
import {
    SectionList,
    StyleSheet,
    Text,
    View
} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    sectionHeader: {
        fontSize: 28,
        paddingLeft: 16,
        fontWeight: 'bold',
        backgroundColor: 'rgba(255, 100, 100, 1.0)'
    },
    item: {
        paddingLeft: 32,
        fontSize: 36
    }
});

export default class SectionListBasics extends Component {
    render() {
        return(
            <View style={styles.container}>
                <SectionList
                    sections={[
                        {title: 'D', data: ['Devin', 'Dan', 'Dominic', 'Robert', 'Robert', 'Robert', 'Robert']},
                        {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']}
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                    keyExtractor={(item, index) => index} />
            </View>
        );
    }
}
