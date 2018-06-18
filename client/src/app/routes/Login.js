import React from 'react';
import { extendObservable } from 'mobx';
import { observer } from 'mobx-react';
import { Container, Header, Input, Button, Message } from 'semantic-ui-react';

export default observer(class Login extends React.Component {
  constructor() {
    super();

    extendObservable(this, {
      username: '',
      email: '',
      password: '',
    });
  }

  onSubmit = () => {
    const {email, password} = this;
    console.log(email, password);
  }

  onChange = e => {
    const {name, value} = e.target;
    this[name] = value;
  }

  render() {
    const { email, password } = this;
    return (
      <Container text>
        <Header as="h2">
          Login
        </Header>
        <Input
          name="email"
          onChange={e => this.onChange(e)}
          value={email}
          placeholder="Email"
          fluid
        />
        <Input
          name="password"
          onChange={e => this.onChange(e)}
          value={password}
          type="password"
          placeholder="Password"
          fluid
        />
        <Button onClick={() => this.onSubmit()}>Submit</Button>
      </Container>
    );
  }
});
