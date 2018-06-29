import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {
render() {
  return (
    <Card>
      <CardSection>
        <Input
          label="User Name"
          placeholder="Brian"
        />
      </CardSection>

      <CardSection>
        <Input
          label="Password"
          placeholder="Password"
        />
      </CardSection>

      <CardSection>
        <Button>
          Login
        </Button>
      </CardSection>
    </Card>
  );
 }
}

export default LoginForm;
