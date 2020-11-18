## GraphQL

{
  allPosts {
    id
    title
  }
}

## Curl
curl https://localhost:3000/graphql -X POST -H 'Content-Type: application/json' \
  --data '{"query":"{ allPosts { id title }}"}'

## GraphQL Mutation
mutation {
  createPost(title: "React", description: "Soon installed") {
    title
    description
  }
}

## Curl Mutation
curl http://localhost -X POST -H 'Content-Type: application/json' \
  --data '{"query": "mutation { createPost(title: \"React\", description: \"Soon installed\") { id }}"}'

or 
```
curl http://localhost:3000/graphql -X POST -H 'Content-Type: application/graphql' -d 'mutation{ createPost(title: "React", description: "Soon installed") { id title } }'
```
## Refs
+ https://graphql.org/graphql-js/graphql-clients/
