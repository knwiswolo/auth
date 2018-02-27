// import libraries
import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase'; // import local firebase library
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

// create component: class-based
class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({ // initialise firebase
            apiKey: 'AIzaSyD0MZtaEKjNxispt6SlsQYhApm_R3uzlrY',
            authDomain: 'auth-72893.firebaseapp.com',
            databaseURL: 'https://auth-72893.firebaseio.com',
            projectId: 'auth-72893',
            storageBucket: 'auth-72893.appspot.com',
            messagingSenderId: '678622546648'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
        return (
            <Button onPress={() => firebase.auth().signOut()}>
                Log Out
            </Button>
        );
            case false:
                return <LoginForm />;
            default: 
        return (
            <View style={styles.viewStyle}>
                <Spinner size="large" />
            </View>        
        );
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

const styles = {
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    }
};

// make available to other components
export default App;