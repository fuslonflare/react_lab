import React, { Component } from 'react';
import { Card, RadioButton, TextInput, Button, Snackbar } from 'react-native-paper';
import { View, Text, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default class TypeImageCard extends Component {
    constructor(props) {
        super(props);
        this.onPressSelectImage = this.onPressSelectImage.bind(this);

        this.state = {
            value: null,
            remark: '',
            name: '',
            itemNo: 0,
            snackbarVisible: false,
            snackbarMessage: ''
        }

        this.ImagePickerOptions = {
            title: 'Choose image from',
            takePhotoButtonTitle: 'Camera',
            chooseFromLibraryButtonTitle: 'Gallery',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            }
        }
    }

    onPressSelectImage() {
        ImagePicker.showImagePicker(this.ImagePickerOptions, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
                this.setState({ snackbarVisible: true, snackbarMessage: 'User cancelled image picker.' });
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
                this.setState({ snackbarVisible: true, snackbarMessage: response.error });
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                const source = { uri: response.uri };
                this.setState({ value: source });
            }
        });
    }

    render() {
        return (
            <View style={{ padding: 8 }}>
                <Card style={{ elevation: 5 }}>
                    <Card.Title title={'#' + this.props.itemNo + ' ' + this.props.name} />
                    <Card.Content>
                        <View style={{ flexDirection: 'column' }}>
                            <Button onPress={this.onPressSelectImage}>Choose image</Button>
                            <Card.Cover source={this.state.value} />
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
                <Snackbar
                    visible={this.state.snackbarVisible}
                    onDismiss={() => this.setState({ snackbarVisible: false })}
                    duration={Snackbar.DURATION_SHORT}
                >{this.state.snackbarMessage}</Snackbar>
            </View>
        );
    }
}