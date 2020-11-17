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
  setLiftStatus(id: "panorama" status: OPEN) {
    name
    status
  }
}

## Curl Mutation
curl https://localhost -H 'Content-Type: application/json' \
  --data '{"query":"mutation {setLiftStatus(id: \"panorama\" status: OPEN) {name status}}"}'
