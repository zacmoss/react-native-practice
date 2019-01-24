import React from 'react';
import { View, TextInput, Button } from 'react-native';

const InputRow = (props) => {
    return (
        <View style={props.style.inputContainer}>
            <TextInput
                style={props.style.placeInput}
                value={props.placeNameState}
                onChangeText={props.changeTextFunc}
            />
            <Button
                style={props.style.placeButton}
                title="Add"
                onPress={props.pressFunc}
            />
        </View>
    )
}

export default InputRow;