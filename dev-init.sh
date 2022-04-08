#!/bin/sh

cp -n ./.env.local ./.env

docker-compose up -d \
    && docker-compose run --rm -v "$(pwd):/usr/src" -w /usr/src node sh -c "npm install && npm run dev" \
    && docker-compose restart node
