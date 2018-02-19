// import libraries
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Firebase from 'firebase';
import { Header } from './components/common';

// create component: class-based
class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyD0MZtaEKjNxispt6SlsQYhApm_R3uzlrY",
            authDomain: "auth-72893.firebaseapp.com",
            databaseURL: "https://auth-72893.firebaseio.com",
            projectId: "auth-72893",
            storageBucket: "auth-72893.appspot.com",
            messagingSenderId: "678622546648"
          });
    }
    
    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <Text>Auth App</Text>
            </View>
        );
    }
}

// make available to other components
export default App;