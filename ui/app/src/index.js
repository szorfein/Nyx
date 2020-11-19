import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ApolloClient, ApolloProvider } from '@apollo/client';
import { cache } from './cache';
import Pages from './pages';

// Initialize ApolloClient
const client = new ApolloClient({
  cache,
  uri: 'http://127.0.0.1:3000/graphql'
})

ReactDOM.render(
    <ApolloProvider client={client}>
      <Pages />
    </ApolloProvider>,
    document.getElementById("root")
);
