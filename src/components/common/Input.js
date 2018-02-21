// import statements
import React from 'react';
import { TextInput, Text, View } from 'react-native';

// create component
const Input = ({ label }) => {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput 
                style={{ height:20, wigth: 100 }}
            />
        </View>
    );
};

// component styling
const styles = {

};

// export
export { Input };