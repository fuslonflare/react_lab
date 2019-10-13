import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    buttonContainer: {
        margin: 20
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default class ButtonBasics extends Component {
    _greatFunction() {
        alert('You tapped the button!')
    }
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button
                        style={styles.buttonContainer}
                        title='Press me'
                        onPress={this._greatFunction} />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        style={styles.buttonContainer}
                        title='Press me'
                        color='#841584'
                        onPress={this._greatFunction} />
                </View>
                <View style={styles.alternativeLayoutButtonContainer}>
                    <Button
                        title='This looks greatttttt!'
                        onPress={this._greatFunction} />
                    <Button
                        title='OK!'
                        color='#841584'
                        onPress={this._greatFunction} />
                </View>
            </View>
        );
    }
}
