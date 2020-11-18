import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://127.0.0.1:3000/graphql',
  cache: new InMemoryCache()
})

client
  .query({
    query: gql`
      query allPosts {
        id,
        title,
        description
      }
    `
  })
  .then(result => console.log(result));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
