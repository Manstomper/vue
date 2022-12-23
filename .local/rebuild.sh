#!/bin/sh

docker compose up -d \
    && docker compose run --rm -v "$(pwd):/usr/src" -w /usr/src node npm install \
    && docker compose restart node \
    && docker compose run --rm -v "$(pwd):/usr/src" -w /usr/src node npm run dev
