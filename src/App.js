// import libraries
import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

// create component: class-based
class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyD0MZtaEKjNxispt6SlsQYhApm_R3uzlrY',
            authDomain: 'auth-72893.firebaseapp.com',
            databaseURL: 'https://auth-72893.firebaseio.com',
            projectId: 'auth-72893',
            storageBucket: 'auth-72893.appspot.com',
            messagingSenderId: '678622546648'
          });
    }
    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

// make available to other components
export default App;