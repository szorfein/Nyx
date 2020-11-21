#!/usr/bin/env sh

set -o errexit -o nounset

docker() {
  if ! systemctl is-active docker ; then
    echo "[+] Start Docker"
    sudo systemctl start docker
  fi
}

docker_compose() {
  echo "[+] Start Docker-Compose"
  sudo docker-compose up -d
}

grpc_post_server() {
  if ! pgrep -f "bin/server" ; then
    echo "[+] nyx-post gRPC server"
    (cd post/app \
      && bundle exec bin/server &
    )
  fi
}

api_graphql() {
  echo "[+] Start GraphQL API server"
  (cd api/app \
    && rails s
  )
}

main() {
  docker
  docker_compose
  grpc_post_server
  api_graphql
}

main "$@"
