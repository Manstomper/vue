# Set up local development

1. Install and start [Docker Desktop](https://www.docker.com/products/docker-desktop)
1. Clone this repository
1. Open a terminal and cd into its directory
1. Run `dev-init.sh`
1. Wait for the setup to finish (log entry "webpack compiled successfully")
1. Open http://localhost:8102

## Now what?

1. If you need to stop containers, e.g. to free up ports, run `docker compose stop`
1. To continue working when containers are stopped, run `./dev.sh`
1. To run node commands such as `npm update`, run `./dev-cli.sh`
