#!/bin/sh

docker compose restart node \
    && docker compose exec node /bin/sh | echo 'You are now in the Node.js container. You can run commands such as npm update. Type exit to quit.'
