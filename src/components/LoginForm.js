// Import libraries
import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common'; // importing xyz from index.js inside our common folder

// create component (class-based)
class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false }; // set the default state (used to deal with user input/feedback)
    // state object = { property: 'empty string' }

    onButtonPress() { 
        const { email, password } = this.state; // destructuring email and password from this.state

        this.setState({ error: '', loading: true }); // refresh error state to null

        firebase.auth().signInWithEmailAndPassword(email, password) // returns a promise: i.e. a construct for handling asynchronous code
            .then(this.onLoginSuccess.bind(this))
            .catch(() => { // failure
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this));
            });
    }

    onLoginFail() {
        this.setState({ error: 'Authentication Failed', loading: false });
    }

    onLoginSuccess() {
        this.setState({ // reset every state (clean up screen) on successful login.
            email: '',
            password: '',
            loading: false,
            error: ''
        });
    }

    renderButton() { // conditional rendering (if-else)
        if (this.state.loading) {
            return <Spinner size="small" />;
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Log In
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder="user@gmail.com"
                        label="Email"
                        value={this.state.email} /*  */
                        onChangeText={email => this.setState({ email })} /* whenever this is called, update email state */
                    />
                </CardSection>
                
                <CardSection>
                    <Input
                        secureTextEntry /* password input: obstruct text */
                        placeholder="*********"
                        label="Password"
                        value={this.state.password} /* update value */
                        onChangeText={password => this.setState({ password })} /* whenever this is called, update password state */
                    />
                </CardSection>
                
                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

// component styling
const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

// make available to other components
export default LoginForm;