import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {
render() {
  return (
    <Card>
      <CardSection style={styles.TextStyle}>
        <Input label="User Name"
          placeholder="Brian"
        />
        <Input label="Password"
          placeholder="Password"
        />
        <Button>
          Login
        </Button>
      </CardSection>
    </Card>
  );
};
}
const styles = {
  TextStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  }
};

export default LoginForm;
