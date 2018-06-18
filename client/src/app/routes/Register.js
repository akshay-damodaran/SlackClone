import React from 'react';
import { Container, Header, Input, Button, Message } from 'semantic-ui-react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      usernameError: '',
      password: '',
      passwordError: '',
      email: '',
      emailError: '',
    };
  }

  onSubmit = async() => {
    const response = await this.props.mutate({
      variables: this.state,
    });

    const {ok, errors} = response.data.register;

    if(ok) {
      this.props.history.push('/');
    } else {
      const err = {};
      errors.forEach(({path, message}) => {
        err[`${path}Error`] = message;
      });
      this.setState({
        ...err,
      });
    }
    console.log(response);
  }

  onChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { username, email, password, usernameError, emailError, passwordError } = this.state;

    const errorList = [];

    if(usernameError) {
      errorList.push(usernameError);
    }

    if(emailError) {
      errorList.push(emailError);
    }

    if(passwordError) {
      errorList.push(passwordError);
    }

    return (
      <Container text>
        <Header as="h2">
          Register
        </Header>
        <Input
          name="username"
          onChange={e => this.onChange(e)}
          value={username}
          error={!!usernameError}
          placeholder="Username"
          fluid
        />
        <Input
          name="email"
          onChange={e => this.onChange(e)}
          value={email}
          error={!!emailError}
          placeholder="Email"
          fluid
        />
        <Input
          name="password"
          onChange={e => this.onChange(e)}
          value={password}
          error={!!passwordError}
          type="password"
          placeholder="Password"
          fluid
        />
        <Button onClick={() => this.onSubmit()}>Submit</Button>
        {(usernameError || emailError || passwordError) ?
          <Message
            error
            header="There was some errors with your submission"
            list={errorList}
          />
          : null
        }
      </Container>
    );
  }
}

const registerMutation = gql`
mutation($username: String!, $email: String!, $password: String!) {
  register(username: $username, email: $email, password: $password) {
    ok
    errors {
      path
      message
    }
  }
}
`;

export default graphql(registerMutation)(Register);
