import React from 'react';
import { gql, useQuery } from '@apollo/client'

export const ALL_POSTS = gql`
  query { allPosts {
    id,
    title,
    description
  }}
`;

function Posts() {
  const { loading, error, data } = useQuery(ALL_POSTS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return data.allPosts.map(({id, title, description}) => (
    <p key={id}>{id} {title } {description}</p>
  ));
}

export default Posts;
