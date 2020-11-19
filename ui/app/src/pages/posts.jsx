import React from 'react';
import { gql, useQuery } from '@apollo/client'

export const ALL_POSTS = gql`
  query allPosts {
    id,
    title,
    description
  }
`

const PostsItem: React.FC<PostsItemProps> = () => {
  const { data, loading, error } = useQuery(
    ALL_POSTS
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR: {error.message}</p>;
  return data;
}

export default PostsItem;
