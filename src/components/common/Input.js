// import statements
import React from 'react';
import { TextInput, Text, View } from 'react-native';

// create component
const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => { // Input props that must be assigned values when the Input tag is being used.
    const { inputStyle, labelStyle, containerStyle } = styles; // desctructuring of styles

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry} /* expecting to retreive a secureTextEntry boolean from parent componenet */
                placeholder={placeholder} /* expecting to retreive a placeholder from parent componenet */
                autoCorrect={false} /* disable autocorrect */
                style={inputStyle}
                value={value} /* arguments to receive value from the Input tag in LoginForm */
                onChangeText={onChangeText}
            />
        </View>
    );
};

// component styling
const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2 // total flex: 3 inputStyle takes 2/3rds of width
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1 // total flex: 3 inputStyle takes 1/3rds of width
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

// export
export { Input };
