// import dependencies
import React from 'react';
import { View, ActivityIndicator } from 'react-native';

// create component
const Spinner = ({ size }) => { // 'size' prop which will be passed from parent component to specify the size of the spinner.
    return (
        <View style={styles.spinnerStyle}>
            <ActivityIndicator 
                size={size || 'large'} // use the prop size value or large by default
            />
        </View>

    );
};

// component styling
const styles = {
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

// export for reuse
export { Spinner };