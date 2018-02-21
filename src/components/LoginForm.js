// import libraries
import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Button, Card, CardSection, Input } from './common'; // importing xyz from index.js inside our common folder

// create component (class-based)
class LoginForm extends Component {
    state = { text: ''}; // set the default state (used to deal with user input/feedback)
    // state object = { property: 'empty string' }

    render() {
        return (
            <Card>
                <CardSection>
                    <TextInput
                        value={this.state.text} /*  */
                        onChangeText={text => this.setState({ text: text })} /*  */
                        style={{ height: 20,width: 100 }} 
                    />
                </CardSection>
                <CardSection></CardSection>
                <CardSection>
                    <Button>
                        Log In
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

// component styling

// make available to other components
export default LoginForm;