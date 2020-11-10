# Nyx-Post

## Start

    $ rails server

## API
HEADER only

    $ curl -I http://localhost:3000/

GET
    $ curl http://localhost:3000/api/v1/posts
    $ curl http://localhost:3000/api/v1/posts/id

POST

    $ curl -i -X POST \
      http://localhost:3000/api/v1/posts \
      -H "Content-Type: application/json" \
      -d "{\"title\":\"GPG Key\", \"description\":\"How to create a GPG Key on Tail Linux\"}"

DELETE

    $ curl -i -X DELETE \
      http://localhost:3000/api/v1/posts/1
