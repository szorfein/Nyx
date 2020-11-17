To request data from an API server, we can use the `query` operation from GraphQL.

query {
  allLifts {
    name
    status
  }
}

To write new data, we should use `mutation`, mutation is analog to REST for CREATE, UPDATE, DELETE.

mutation BurnOut {
  deleteAllData
}

When need real-time, use `subscription`

subscription {
  lifeStatusChange {
    name
    capacity
    status
  }
}

## Scalar
We can create a custom 'scalar' type like:
enum PhotoCategory {
  SELFIE
  PORTRAIT
  ACTION
  LANDSCAPE
  GRAPHIC
}

type Photo {
  id: ID!
  name: String!
  url: String!
  description: String!
  created: String!
  category: PhotoCategory!
}
