## GraphQL

{
  allLifts {
    name
  }
}

## Curl
curl https://localhost -H 'Content-Type: application/json' \
  --data '{"query":"{ allLifts {name}}"}'

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
