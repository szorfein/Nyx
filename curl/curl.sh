#!/usr/bin/env sh

URL="http://localhost:3000/graphql"

query_arg() {
  query='{"query":"mutation { createPost (title: \"'$1'\", description: \"'$2'\") { id title } }"}'
  curl "$URL" -XPOST -H "Content-Type: application/json" \
    --data "$query"
}

echo "Adding new post"
query_arg "New Awesome Post" "Another Post"
query_arg "Unix" "An awesome OS"
