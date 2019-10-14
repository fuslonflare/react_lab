import React, { Component } from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    View
} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        padding: 16,
        fontSize: 18
    }
});

export default class FlatListBasics extends Component {
    render() {
        return(
            <View style={styles.container}>
                <FlatList
                    data={[
                        {key: 'Hydrogen'},
                        {key: 'Helium'},
                        {key: 'Lithium'},
                        {key: 'Beryllium'},
                        {key: 'Boron'},
                        {key: 'Carbon'},
                        {key: 'Nitrogen'},
                        {key: 'Oxygen'},
                        {key: 'Fluorine'},
                        {key: 'Neon'},
                        {key: 'Sodium'},
                        {key: 'Magnesium'},
                        {key: 'Aluminium'},
                        {key: 'Silicon'},
                        {key: 'Phopsphorus'},
                        {key: 'Sulfer'},
                        {key: 'Chlorine'},
                        {key: 'Argon'},
                        {key: 'Potassium'},
                        {key: 'Calcium'},
                        {key: 'Hydrogen'},
                        {key: 'Helium'},
                        {key: 'Lithium'},
                        {key: 'Beryllium'},
                        {key: 'Boron'},
                        {key: 'Carbon'},
                        {key: 'Nitrogen'},
                        {key: 'Oxygen'},
                        {key: 'Fluorine'},
                        {key: 'Neon'},
                        {key: 'Sodium'},
                        {key: 'Magnesium'},
                        {key: 'Aluminium'},
                        {key: 'Silicon'},
                        {key: 'Phopsphorus'},
                        {key: 'Sulfer'},
                        {key: 'Chlorine'},
                        {key: 'Argon'},
                        {key: 'Potassium'},
                        {key: 'Calcium'},
                        {key: 'Hydrogen'},
                        {key: 'Helium'},
                        {key: 'Lithium'},
                        {key: 'Beryllium'},
                        {key: 'Boron'},
                        {key: 'Carbon'},
                        {key: 'Nitrogen'},
                        {key: 'Oxygen'},
                        {key: 'Fluorine'},
                        {key: 'Neon'},
                        {key: 'Sodium'},
                        {key: 'Magnesium'},
                        {key: 'Aluminium'},
                        {key: 'Silicon'},
                        {key: 'Phopsphorus'},
                        {key: 'Sulfer'},
                        {key: 'Chlorine'},
                        {key: 'Argon'},
                        {key: 'Potassium'},
                        {key: 'Calcium'},
                        {key: 'Hydrogen'},
                        {key: 'Helium'},
                        {key: 'Lithium'},
                        {key: 'Beryllium'},
                        {key: 'Boron'},
                        {key: 'Carbon'},
                        {key: 'Nitrogen'},
                        {key: 'Oxygen'},
                        {key: 'Fluorine'},
                        {key: 'Neon'},
                        {key: 'Sodium'},
                        {key: 'Magnesium'},
                        {key: 'Aluminium'},
                        {key: 'Silicon'},
                        {key: 'Phopsphorus'},
                        {key: 'Sulfer'},
                        {key: 'Chlorine'},
                        {key: 'Argon'},
                        {key: 'Potassium'},
                        {key: 'Calcium'}
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>} />
            </View>
        );
    }
}
