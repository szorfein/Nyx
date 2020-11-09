#!/usr/bin/env sh

set -o errexit -o nounset

if ! systemctl is-active docker ; then
  echo "[+] Start Docker"
  sudo systemctl start docker
fi

echo "[+] Start Databases"
sudo docker-compose up -d

echo "[+] Start GraphQL API server"
(cd graphql/app \
  && bundle exec rails server
)
