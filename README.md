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

CREATE DATABASE shop;
USE shop;
CREATE TABLE product (id INT PRIMARY KEY AUTO_INCREMENT, title VARCHAR(100), price DECIMAL(6,2) NOT NULL);
INSERT INTO product VALUES (1, 'Axe', 5.90);
INSERT INTO product VALUES (2, 'Dagger', 9.90);
INSERT INTO product VALUES (3, 'Staff', 8.00);
INSERT INTO product VALUES (4, 'Shield', 4.50);
