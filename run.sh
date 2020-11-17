#!/usr/bin/env sh

set -o errexit -o nounset

if ! systemctl is-active docker ; then
  echo "[+] Start Docker"
  sudo systemctl start docker
fi

echo "[+] Start Docker-Compose"
sudo docker-compose up -d

if ! pgrep -f "bin/server" ; then
  echo "[+] nyx-post gRPC server"
  (cd post/app \
    && bundle exec bin/server &
  )
fi

echo "[+] Start GraphQL API server"
(cd api/app \
  && rails s
)
