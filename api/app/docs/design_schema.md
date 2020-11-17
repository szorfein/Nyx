## Schema

Define `type` first:
```
type User {
  id: ID!
  email: String!
  name: String
  avatarUrl: String
}
```
Or with rails g graphql:object UserType id:ID! email:String! name:String avatarUrl:String

**Resolvers*
Just after `query` or `behind`, if you have a `resolver` (if use gRPC for example), add here


Mutation next, use word like in REST upd, del, add, following by the type (User here)
```
type Mutation {      | with ruby, mutation can be written in:
  addUser(           | app/graphql/mutations/add_user.rb, class AddUser < BaseMutation
    email: String!
    name: String
  ): User
  delUser(           | app/graphql/mutations/del_user.rb, class DelUser < BaseMutation
    id: ID!
  ): User
}
```

*Resolvers*
Just after `mutation` or `behind`, if you have a `resolver` (if use gRPC for example), add here:

The type `Query` here:
```
type Query {           | with ruby, query are located in:
  users: [User!]!      | app/graphql/types/query_type.rb
}
```

`schema` at the end
```
schema {               | with ruby, schema is located in app/graphql/app_schema.rb
  query: Query,        | and call: app/graphql/types/query_type.rb
  mutation: Mutation   | and app/graphql/types/mutation_type.rb
}                      |
```
