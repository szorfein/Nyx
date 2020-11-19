import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloClient, ApolloProvider } from '@apollo/client';
import { cache } from './cache';

// Initialize ApolloClient
const client = new ApolloClient({
  cache,
  uri: 'http://127.0.0.1:3000/graphql'
})

ReactDOM.render(
    <ApolloProvider client={client}>
    </ApolloProvider>,
    document.getElementById("root")
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
