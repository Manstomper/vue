#!/bin/sh

docker-compose restart node \
    && docker-compose run --rm -v "$(pwd):/usr/src" -w /usr/src node sh -c "npm run dev"
