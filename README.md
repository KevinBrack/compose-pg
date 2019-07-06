# Docker Compose Full Stack Application Template

This template provides a docker-compose file that builds the following services in seperate containers.

* Jenkins
* Express (Node)
* NextJS (Node)
* Postgres

_____

## PORTS

The following ports are exposed when the containers are built

| PORT | SERVICE  |
|------|----------|
| 8080 | Jenkins  |
| 1337 | Express  |
| 80   | NextJS   |
| 5432 | Postgres |

_____

## ENVIRONMENT

This template requires the following postgres ENV to be completed in the file `pg.env` to build properly

### __pg.env__

POSTGRES_PASSWORD

POSTGRES_USER

POSTGRES_DB