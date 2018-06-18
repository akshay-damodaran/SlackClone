/* global window */

import React from 'react';
import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import 'semantic-ui-css/semantic.min.css';

import Routes from './routes';

const client = new ApolloClient({
  uri: 'http://localhost:8082/graphql',
});

const App = (
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
);

render(
  App,
  window.document.getElementById('app'),
);
