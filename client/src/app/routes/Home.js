import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const Home = ({ data: { loading, allUsers } }) => (
  loading ? null : allUsers.map(u => (
    <h1 key={u.id}>
      {u.username}
    </h1>
  ))
);

const allUserQuery = gql`
{
  allUsers {
    id
    username
  }
}
`;

export default graphql(allUserQuery)(Home);
