#!/usr/bin/env sh

set -o errexit -o nounset

if ! systemctl is-active docker ; then
  echo "[+] Starting Docker"
  sudo systemctl start docker
fi

echo "[+] Starting GraphQL API server"
(cd graphql/app \
  && bundle exec rails server
)
